import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
 export class AppComponent implements OnInit {
  isMobileMenuOpen = false;
  title = "hello";
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
//  products = [
//     {
//       variations: [
//         {
//           color: "#008000",
//           images: [
//             { url: "https://s3.cloud.cmctelecom.vn/tinhte2/2020/07/5089381_Xetinhte_Ninja400_2021_7.jpg", alt: "Green Bike" },
//             { url: "https://dailymuabanxe.net/wp-content/uploads/2023/11/Kawasaki-Ninja-500-5.webp", alt: "Green Bike" },
//             { url: "https://dailymuabanxe.net/wp-content/uploads/2023/11/Kawasaki-Ninja-500-6.webp", alt: "Green Bike" },
//           ]
//         },
//         {
//           color: "#0000FF",
//           images: [
//             { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S6.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" },
//             { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S1.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" }
//           ]
//         },
//         {
//           color: "black",
//           images: [
//             { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fkawasaki%2Fninja-zx-4r%2Fkawasaki-ninja-zx-4r-metallic-spark-black.jpg%3Fv%3D1697534375&w=750&q=75", alt: "Silver Bike" },
//             { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fgallery%2Fkawasaki%2Fninja-zx-4r%2Fexterior%2Fkawasaki_ninja_zx-4r_class-leading-engine-performance.jpg%3Fv%3D2023-10-17&w=828&q=75", alt: "Silver Bike" }
//           ]
//         }
//       ],
//       id:"1",
//       name: "KAWASAKI Z1000",
//       details: "KAWASAKI Z1000: luôn đội mũ bảo hiểm, bảo vệ mắt và trang phục bảo hộ...",
//       color: ["#008000", "#0000FF", "#C0C0C0"],
//       sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
//       price: 16000,
//       olds: 24000,
//       quantity: 1
//     },
//     {
//       variations: [
//         {
//           color: "#FF0000",
//           images: [
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/141709/ninja-300-right-front-three-quarter.jpeg", alt: "Red Ninja 300" },
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/141709/ninja-300-right-side-view.jpeg", alt: "Red Ninja 300 Side" }
//           ]
//         },
//         {
//           color: "#000000",
//           images: [
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/141709/ninja-300-right-front-three-quarter2.jpeg", alt: "Black Ninja 300" },
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/141709/ninja-300-right-side-view2.jpeg", alt: "Black Ninja 300 Side" }
//           ]
//         }
//       ],
//       id:"2",
//       name: "KAWASAKI Ninja 300",
//       details: "Ninja 300 với động cơ mạnh mẽ và thiết kế thể thao",
//       color: ["#FF0000", "#000000"],
//       sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
//       price: 12000,
//       olds: 18000,
//       quantity: 1
//     },
//     {
//       variations: [
//         {
//           color: "#00FFFF",
//           images: [
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/123525/z650-right-front-three-quarter.jpeg", alt: "Teal Z650" },
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/123525/z650-right-side-view.jpeg", alt: "Teal Z650 Side" }
//           ]
//         }
//       ],
//       id:"3",
//       name: "KAWASAKI Z650",
//       details: "Z650 với thiết kế đường phố mạnh mẽ",
//       color: ["#00FFFF"],
//       sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
//       price: 14000,
//       olds: 20000,
//       quantity: 1
//     },
//     {
//       variations: [
//         {
//           color: "#800080",
//           images: [
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/141707/ninja-650-right-front-three-quarter.jpeg", alt: "Purple Ninja 650" },
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/141707/ninja-650-right-side-view.jpeg", alt: "Purple Ninja 650 Side" }
//           ]
//         },
//         {
//           color: "#FFFFFF",
//           images: [
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/141707/ninja-650-right-front-three-quarter2.jpeg", alt: "White Ninja 650" },
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/141707/ninja-650-right-side-view2.jpeg", alt: "White Ninja 650 Side" }
//           ]
//         }
//       ],
//       id:"4",
//       name: "KAWASAKI Ninja 650",
//       details: "Ninja 650 cân bằng giữa hiệu suất và thoải mái",
//       color: ["#800080", "#FFFFFF"],
//       sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
//       price: 15000,
//       olds: 22000,
//       quantity: 1
//     },
//     {
//       variations: [
//         {
//           color: "#FF4500",
//           images: [
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/123527/z900-right-front-three-quarter.jpeg", alt: "Orange Z900" },
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/123527/z900-right-side-view.jpeg", alt: "Orange Z900 Side" }
//           ]
//         }
//       ],
//       id:"5",
//       name: "KAWASAKI Z900",
//       details: "Z900 với động cơ 948cc mạnh mẽ",
//       color: ["#FF4500"],
//       sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
//       price: 18000,
//       olds: 26000,
//       quantity: 1
//     },
//     {
//       variations: [
//         {
//           color: "#A0522D",
//           images: [
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/40432/versys-650-right-front-three-quarter.jpeg", alt: "Brown Versys 650" },
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/40432/versys-650-right-side-view.jpeg", alt: "Brown Versys 650 Side" }
//           ]
//         }
//       ],
//       id:"6",
//       name: "KAWASAKI Versys 650",
//       details: "Versys 650 - xe đa dụng cho mọi địa hình",
//       color: ["#A0522D"],
//       sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
//       price: 16000,
//       olds: 23000,
//       quantity: 1
//     },
//     {
//       variations: [
//         {
//           color: "#FFD700",
//           images: [
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/123529/z1000-right-front-three-quarter.jpeg", alt: "Gold Z1000" },
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/123529/z1000-right-side-view.jpeg", alt: "Gold Z1000 Side" }
//           ]
//         }
//       ],
//       id:"7",
//       name: "KAWASAKI Z1000 Special Edition",
//       details: "Phiên bản đặc biệt Z1000 với màu vàng độc đáo",
//       color: ["#FFD700"],
//       sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
//       price: 22000,
//       olds: 30000,
//       quantity: 1
//     },
//     {
//       variations: [
//         {
//           color: "#4682B4",
//           images: [
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/40434/ninja-1000sx-right-front-three-quarter.jpeg", alt: "Steel Blue Ninja 1000SX" },
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/40434/ninja-1000sx-right-side-view.jpeg", alt: "Steel Blue Ninja 1000SX Side" }
//           ]
//         }
//       ],
//       id:"8",
//       name: "KAWASAKI Ninja 1000SX",
//       details: "Ninja 1000SX - thể thao và du lịch kết hợp",
//       color: ["#4682B4"],
//       sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
//       price: 25000,
//       olds: 35000,
//       quantity: 1
//     },
//     {
//       variations: [
//         {
//           color: "#556B2F",
//           images: [
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/40436/klr-650-right-front-three-quarter.jpeg", alt: "Olive Green KLR650" },
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/40436/klr-650-right-side-view.jpeg", alt: "Olive Green KLR650 Side" }
//           ]
//         }
//       ],
//       id:"9",
//       name: "KAWASAKI KLR650",
//       details: "KLR650 - xe địa hình bền bỉ",
//       color: ["#556B2F"],
//       sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
//       price: 13000,
//       olds: 19000,
//       quantity: 1
//     },
//     {
//       variations: [
//         {
//           color: "#C0C0C0",
//           images: [
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/123531/zx-10r-right-front-three-quarter.jpeg", alt: "Silver ZX-10R" },
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/123531/zx-10r-right-side-view.jpeg", alt: "Silver ZX-10R Side" }
//           ]
//         },
//         {
//           color: "#000000",
//           images: [
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/123531/zx-10r-right-front-three-quarter2.jpeg", alt: "Black ZX-10R" },
//             { url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/123531/zx-10r-right-side-view2.jpeg", alt: "Black ZX-10R Side" }
//           ]
//         }
//       ],
//       id:"10",
//       name: "KAWASAKI ZX-10R",
//       details: "ZX-10R - siêu xe thể thao đỉnh cao",
//       color: ["#C0C0C0", "#000000"],
//       sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
//       price: 30000,
//       olds: 40000,
//       quantity: 1
//     }
//   ]