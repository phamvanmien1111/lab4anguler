import { Component, OnInit, AfterViewInit, signal, effect } from '@angular/core';
import { ProductService } from '../services/product.service';

declare var bootstrap: any;

@Component({
  selector: 'productall',
  standalone: false,
  templateUrl: './lab4.component.html',
  styleUrl: './lab4.component.css'
})
export class Lab4Component implements OnInit, AfterViewInit {
  products: any[] = [];
  
  // Sử dụng signal để quản lý trạng thái riêng cho từng sản phẩm
  selectedColors = signal<{ [key: number]: string }>({});
  productImages = signal<{ [key: number]: { url: string; alt: string }[] }>({});
  selectedSizes = signal<{ [key: number]: string }>({});
  quantities = signal<{ [key: number]: number }>({});

  constructor(private productService: ProductService) {
    effect(() => {
      const newSelectedColors: { [key: number]: string } = {};
      const newProductImages: { [key: number]: { url: string; alt: string }[] } = {};
      const newQuantities: { [key: number]: number } = {};

      this.products.forEach(product => {
        // Khởi tạo giá trị mặc định cho mỗi sản phẩm
        newQuantities[product.id] = 1;
        
        if (product.variations?.length) {
          newSelectedColors[product.id] = product.variations[0].color;
          newProductImages[product.id] = [...product.variations[0].images];
        }
      });

      this.selectedColors.set(newSelectedColors);
      this.productImages.set(newProductImages);
      this.quantities.set(newQuantities);
    });
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  ngAfterViewInit() {
    setTimeout(() => this.initCarousel(), 500);
  }

  initCarousel() {
    setTimeout(() => {
      this.products.forEach(product => {
        const carouselElement = document.querySelector(`#carouselExample${product.id}`);
        if (carouselElement) {
          new bootstrap.Carousel(carouselElement, { interval: false });
        }
      });
    }, 300);
  }

 changeColor(productId: number, color: string) {
  this.selectedColors.update(colors => {
    // Tạo bản sao mới của object colors
    const newColors = { ...colors };
    // Cập nhật màu cho sản phẩm cụ thể
    newColors[productId] = color;
    return newColors;
  });

  // Cập nhật hình ảnh tương ứng
  const product = this.products.find(p => p.id === productId);
  if (product) {
    const variation = product.variations.find((v: any) => v.color === color);
    if (variation) {
      this.productImages.update(images => ({
        ...images,
        // Tạo mảng mới để trigger change detection
        [productId]: [...variation.images] 
      }));
    }
  }
}

  selectSize(productId: number, size: string) {
    this.selectedSizes.update(sizes => ({ 
      ...sizes, 
      [productId]: size 
    }));
  }

  tang(productId: number) {
    this.quantities.update(q => {
      const current = q[productId] || 1;
      if (current < 5) {
        return { ...q, [productId]: current + 1 };
      } else {
        alert("Số lượng quá lớn! Liên hệ qua SDT: 0906 983 875 hoặc Gmail: mienpvpd10375@fpt.edu.vn");
        return q;
      }
    });
  }

  giam(productId: number) {
    this.quantities.update(q => {
      const current = q[productId] || 1;
      if (current > 1) {
        return { ...q, [productId]: current - 1 };
      }
      return q;
    });
  }

  getQuantity(productId: number): number {
    return this.quantities()[productId] || 1;
  }
}
