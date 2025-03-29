import { Component, OnInit, signal ,WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
declare var bootstrap: any;
@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  product: any = null;
  selectedSizes = signal<{ [key: number]: string }>({}); // Quản lý kích thước
  selectedColor = signal<string | null>(null); // Quản lý màu sắc đang chọn
  productImages = signal<{ url: string; alt: string }[]>([]); // Quản lý hình ảnh sản phẩm
  quantity: WritableSignal<number> = signal(1);
  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = String(params.get('id'));
      this.product = this.productService.getProductById(productId);

      console.log("Product Loaded:", this.product);

      if (this.product && this.product.variations?.length > 0) {
        console.log("Available Colors:", this.product.variations.map((v: any) => v.color));
        this.changeColor(this.product.variations[0].color);
      }
    });
  }

  // Chọn kích thước
  selectSize(productId: number, size: string) {
    this.selectedSizes.update(sizes => ({ ...sizes, [productId]: size }));
  }

  // Lấy màu sắc hiện tại
  selectedColorValue(): string | null {
    return this.selectedColor();
  }

  // Chọn màu sắc và cập nhật hình ảnh sản phẩm
  changeColor(color: string) {
  this.selectedColor.set(color);

  // Tìm biến thể sản phẩm theo màu
  const variation = this.product.variations.find((v: any) => v.color === color);
  if (variation) {
    console.log("Color changed to:", color);
    console.log("Updated Images:", variation.images);

    // Cập nhật danh sách hình ảnh
    this.productImages.set([...variation.images]);
  }
}

tang() {
  if (this.quantity() < 5) {
    this.quantity.update(q => q + 1);
  } else {
    this.showMaxQuantityAlert();
  }
}

private showMaxQuantityAlert() {
  alert("Số lượng tối đa là 5. Vui lòng liên hệ hotline 0906 983 875 nếu cần số lượng lớn hơn");
  
}

giam() {
    if (this.quantity() > 1) {
        this.quantity.set(this.quantity() - 1); 
    }
}

goToSlide(index: number) {
  const carousel = bootstrap.Carousel.getInstance(document.getElementById('productCarousel'));
  if (carousel) {
    carousel.to(index);
  }
}
}
