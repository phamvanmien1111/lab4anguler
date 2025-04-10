import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'lab5',
  standalone: false,
  templateUrl: './lab5.component.html',
  styleUrl: './lab5.component.css'
})
export class Lab5Component {
  productForm: FormGroup;
  availableColors = ['Red', 'Blue', 'Green', 'Black', 'White', 'Yellow'];
  previewPhotos: string[] = [];

  constructor() {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(250)
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(100)
      ]),
      colors: new FormArray([], Validators.required),
      photos: new FormArray([], Validators.required)
    });
  }

  get colors(): FormArray {
    return this.productForm.get('colors') as FormArray;
  }

  get photos(): FormArray {
    return this.productForm.get('photos') as FormArray;
  }

  onColorChange(color: string, event: any): void {
    if (event.target.checked) {
      this.colors.push(new FormControl(color));
    } else {
      const index = this.colors.controls.findIndex(c => c.value === color);
      this.colors.removeAt(index);
    }
  }

  onPhotoSelected(event: any): void {
    const files = event.target.files;
    this.photos.clear();
    this.previewPhotos = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.photos.push(new FormControl(file));
    
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewPhotos.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = new FormData();
      formData.append('name', this.productForm.value.name);
      formData.append('description', this.productForm.value.description);
      formData.append('price', this.productForm.value.price);
      
      this.productForm.value.colors.forEach((color: string, i: number) => {
        formData.append(`colors[${i}]`, color);
      });

      this.photos.controls.forEach((photoControl, i) => {
        if (photoControl.value) {
          formData.append(`photos`, photoControl.value);
        }
      });
      console.log('Form data ready for upload:', formData);
    }
  }
}