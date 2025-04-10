import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {
      variations: [
         {
          color: "#008000",
          images: [
            { url: "https://s3.cloud.cmctelecom.vn/tinhte2/2020/07/5089381_Xetinhte_Ninja400_2021_7.jpg", alt: "Green Bike" },
            { url: "https://dailymuabanxe.net/wp-content/uploads/2023/11/Kawasaki-Ninja-500-5.webp", alt: "Green Bike" },
            { url: "https://dailymuabanxe.net/wp-content/uploads/2023/11/Kawasaki-Ninja-500-6.webp", alt: "Green Bike" },
          ]
        },
        {
          color: "#0000FF",
          images: [
            { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S6.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" },
            { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S1.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" }
          ]
        },
        {
          color: "black",
          images: [
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fkawasaki%2Fninja-zx-4r%2Fkawasaki-ninja-zx-4r-metallic-spark-black.jpg%3Fv%3D1697534375&w=750&q=75", alt: "Silver Bike" },
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fgallery%2Fkawasaki%2Fninja-zx-4r%2Fexterior%2Fkawasaki_ninja_zx-4r_class-leading-engine-performance.jpg%3Fv%3D2023-10-17&w=828&q=75", alt: "Silver Bike" }
          ]
        }
      ],
      id: "1",
      name: "KAWASAKI Z1000",
      details: "KAWASAKI Z1000: luôn đội mũ bảo hiểm, bảo vệ mắt và trang phục bảo hộ...",
      color: ["#008000"],
      sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
      price: 16000,
      olds: 24000,
      quantity: 1
    },
    {
      variations: [
        {
          color: "black",
          images: [
            { url: "https://decalbinhduong.com/kcfinder/upload//images/z1000/decal-kawasaki-z1000-xanh-den-nhom-xuoc-217.jpg", alt: "Green Bike" },
            { url: "https://decalbinhduong.com/kcfinder/upload//images/z1000/decal-kawasaki-z1000-xanh-den-nhom-xuoc-218.jpg", alt: "Green Bike" },
            { url: "https://decalbinhduong.com/kcfinder/upload//images/z1000/decal-kawasaki-z1000-xanh-den-nhom-xuoc-.jpg", alt: "Green Bike" },
          ]
        },
        {
          color: "#0000FF",
          images: [
            { url: "https://decalbinhduong.com/kcfinder/upload//images/Yamaha%20R15/decal-kawasaki-z1000-cam-bac-phien-ban-amg13.jpg", alt: "Blue Bike" },
            { url: "https://decalbinhduong.com/kcfinder/upload//images/Yamaha%20R15/decal-kawasaki-z1000-cam-bac-phien-ban-amg16.jpg", alt: "Blue Bike" }
          ]
        },
        {
          color: "dark",
          images: [
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fkawasaki%2Fninja-zx-4r%2Fkawasaki-ninja-zx-4r-metallic-spark-black.jpg%3Fv%3D1697534375&w=750&q=75", alt: "Silver Bike" },
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fgallery%2Fkawasaki%2Fninja-zx-4r%2Fexterior%2Fkawasaki_ninja_zx-4r_class-leading-engine-performance.jpg%3Fv%3D2023-10-17&w=828&q=75", alt: "Silver Bike" }
          ]
        }
      ],
      id: "2",
      name: "KAWASAKI Ninja 300",
      details: "Ninja 300 với động cơ mạnh mẽ và thiết kế thể thao",
      color: ["#FF0000"],
      sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
      price: 12000,
      olds: 18000,
      quantity: 1
    },
    {
      variations: [
        {
          color: "#black",
          images: [
            { url: "https://decalbinhduong.com/kcfinder/upload//images/Yamaha%20R15/decal-kawasaki-z1000-cam-bac-phien-ban-amg13.jpg", alt: "Blue Bike" },
            { url: "https://decalbinhduong.com/kcfinder/upload//images/Yamaha%20R15/decal-kawasaki-z1000-cam-bac-phien-ban-amg16.jpg", alt: "Blue Bike" },
          ]
        },  
        {
          color: "blue",
          images: [
            { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S6.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" },
            { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S1.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" }
          ]
        },
        {
          color: "black",
          images: [
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fkawasaki%2Fninja-zx-4r%2Fkawasaki-ninja-zx-4r-metallic-spark-black.jpg%3Fv%3D1697534375&w=750&q=75", alt: "Silver Bike" },
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fgallery%2Fkawasaki%2Fninja-zx-4r%2Fexterior%2Fkawasaki_ninja_zx-4r_class-leading-engine-performance.jpg%3Fv%3D2023-10-17&w=828&q=75", alt: "Silver Bike" }
          ]
        }
      ],
      id:"3",
      name: "KAWASAKI Z1000",
      details: "KAWASAKI Z1000: luôn đội mũ bảo hiểm, bảo vệ mắt và trang phục bảo hộ...",
      color: ["#008000", "#0000FF", "#C0C0C0"],
      sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
      price: 16000,
      olds: 24000,
      quantity: 1
    },
    {
      variations: [
        {
          color: "#008000",
          images: [
            { url: "https://decalbinhduong.com/kcfinder/upload//images/kawasaki/decal-kawasaki-z1000-cam-bac-mau-amga10.jpg", alt: "Green Bike" },
            { url: "https://decalbinhduong.com/kcfinder/upload//images/kawasaki/decal-kawasaki-z1000-cam-bac-mau-amga10.jpg", alt: "Green Bike" },
            { url: "https://decalbinhduong.com/kcfinder/upload//images/kawasaki/decal-kawasaki-z1000-cam-bac-mau-amga6.jpg", alt: "Green Bike" },
          ]
        },
        {
          color: "#0000FF",
          images: [
            { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S6.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" },
            { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S1.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" }
          ]
        },
        {
          color: "black",
          images: [
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fkawasaki%2Fninja-zx-4r%2Fkawasaki-ninja-zx-4r-metallic-spark-black.jpg%3Fv%3D1697534375&w=750&q=75", alt: "Silver Bike" },
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fgallery%2Fkawasaki%2Fninja-zx-4r%2Fexterior%2Fkawasaki_ninja_zx-4r_class-leading-engine-performance.jpg%3Fv%3D2023-10-17&w=828&q=75", alt: "Silver Bike" }
          ]
        }
      ],
      id:"4",
      name: "KAWASAKI Z1000",
      details: "KAWASAKI Z1000: luôn đội mũ bảo hiểm, bảo vệ mắt và trang phục bảo hộ...",
      color: ["#008000", "#0000FF", "#C0C0C0"],
      sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
      price: 16000,
      olds: 24000,
      quantity: 1
    },
    {
      variations: [
        {
          color: "#008000",
          images: [
            { url: "https://s3.cloud.cmctelecom.vn/tinhte2/2020/07/5089381_Xetinhte_Ninja400_2021_7.jpg", alt: "Green Bike" },
            { url: "https://dailymuabanxe.net/wp-content/uploads/2023/11/Kawasaki-Ninja-500-5.webp", alt: "Green Bike" },
            { url: "https://dailymuabanxe.net/wp-content/uploads/2023/11/Kawasaki-Ninja-500-6.webp", alt: "Green Bike" },
          ]
        },
        {
          color: "#0000FF",
          images: [
            { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S6.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" },
            { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S1.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" }
          ]
        },
        {
          color: "black",
          images: [
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fkawasaki%2Fninja-zx-4r%2Fkawasaki-ninja-zx-4r-metallic-spark-black.jpg%3Fv%3D1697534375&w=750&q=75", alt: "Silver Bike" },
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fgallery%2Fkawasaki%2Fninja-zx-4r%2Fexterior%2Fkawasaki_ninja_zx-4r_class-leading-engine-performance.jpg%3Fv%3D2023-10-17&w=828&q=75", alt: "Silver Bike" }
          ]
        }
      ],
      id:"5",
      name: "KAWASAKI Z1000",
      details: "KAWASAKI Z1000: luôn đội mũ bảo hiểm, bảo vệ mắt và trang phục bảo hộ...",
      color: ["#008000", "#0000FF", "#C0C0C0"],
      sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
      price: 16000,
      olds: 24000,
      quantity: 1
    },
    {
      variations: [
        {
          color: "#008000",
          images: [
            { url: "https://s3.cloud.cmctelecom.vn/tinhte2/2020/07/5089381_Xetinhte_Ninja400_2021_7.jpg", alt: "Green Bike" },
            { url: "https://dailymuabanxe.net/wp-content/uploads/2023/11/Kawasaki-Ninja-500-5.webp", alt: "Green Bike" },
            { url: "https://dailymuabanxe.net/wp-content/uploads/2023/11/Kawasaki-Ninja-500-6.webp", alt: "Green Bike" },
          ]
        },
        {
          color: "#0000FF",
          images: [
            { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S6.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" },
            { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S1.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" }
          ]
        },
        {
          color: "black",
          images: [
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fkawasaki%2Fninja-zx-4r%2Fkawasaki-ninja-zx-4r-metallic-spark-black.jpg%3Fv%3D1697534375&w=750&q=75", alt: "Silver Bike" },
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fgallery%2Fkawasaki%2Fninja-zx-4r%2Fexterior%2Fkawasaki_ninja_zx-4r_class-leading-engine-performance.jpg%3Fv%3D2023-10-17&w=828&q=75", alt: "Silver Bike" }
          ]
        }
      ],
      id:"6",
      name: "KAWASAKI Z1000",
      details: "KAWASAKI Z1000: luôn đội mũ bảo hiểm, bảo vệ mắt và trang phục bảo hộ...",
      color: ["#008000", "#0000FF", "#C0C0C0"],
      sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
      price: 16000,
      olds: 24000,
      quantity: 1
    },
    {
      variations: [
        {
          color: "#008000",
          images: [
            { url: "https://s3.cloud.cmctelecom.vn/tinhte2/2020/07/5089381_Xetinhte_Ninja400_2021_7.jpg", alt: "Green Bike" },
            { url: "https://dailymuabanxe.net/wp-content/uploads/2023/11/Kawasaki-Ninja-500-5.webp", alt: "Green Bike" },
            { url: "https://dailymuabanxe.net/wp-content/uploads/2023/11/Kawasaki-Ninja-500-6.webp", alt: "Green Bike" },
          ]
        },
        {
          color: "#0000FF",
          images: [
            { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S6.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" },
            { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S1.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" }
          ]
        },
        {
          color: "black",
          images: [
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fkawasaki%2Fninja-zx-4r%2Fkawasaki-ninja-zx-4r-metallic-spark-black.jpg%3Fv%3D1697534375&w=750&q=75", alt: "Silver Bike" },
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fgallery%2Fkawasaki%2Fninja-zx-4r%2Fexterior%2Fkawasaki_ninja_zx-4r_class-leading-engine-performance.jpg%3Fv%3D2023-10-17&w=828&q=75", alt: "Silver Bike" }
          ]
        }
      ],
      id:"7",
      name: "KAWASAKI Z1000",
      details: "KAWASAKI Z1000: luôn đội mũ bảo hiểm, bảo vệ mắt và trang phục bảo hộ...",
      color: ["#008000", "#0000FF", "#C0C0C0"],
      sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
      price: 16000,
      olds: 24000,
      quantity: 1
    },
    {
      variations: [
        {
          color: "#008000",
          images: [
            { url: "https://s3.cloud.cmctelecom.vn/tinhte2/2020/07/5089381_Xetinhte_Ninja400_2021_7.jpg", alt: "Green Bike" },
            { url: "https://dailymuabanxe.net/wp-content/uploads/2023/11/Kawasaki-Ninja-500-5.webp", alt: "Green Bike" },
            { url: "https://dailymuabanxe.net/wp-content/uploads/2023/11/Kawasaki-Ninja-500-6.webp", alt: "Green Bike" },
          ]
        },
        {
          color: "#0000FF",
          images: [
            { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S6.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" },
            { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S1.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" }
          ]
        },
        {
          color: "black",
          images: [
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fkawasaki%2Fninja-zx-4r%2Fkawasaki-ninja-zx-4r-metallic-spark-black.jpg%3Fv%3D1697534375&w=750&q=75", alt: "Silver Bike" },
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fgallery%2Fkawasaki%2Fninja-zx-4r%2Fexterior%2Fkawasaki_ninja_zx-4r_class-leading-engine-performance.jpg%3Fv%3D2023-10-17&w=828&q=75", alt: "Silver Bike" }
          ]
        }
      ],
      id:"11",
      name: "KAWASAKI Z1000",
      details: "KAWASAKI Z1000: luôn đội mũ bảo hiểm, bảo vệ mắt và trang phục bảo hộ...",
      color: ["#008000", "#0000FF", "#C0C0C0"],
      sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
      price: 16000,
      olds: 24000,
      quantity: 1
    },
    {
      variations: [
        {
          color: "#008000",
          images: [
            { url: "https://s3.cloud.cmctelecom.vn/tinhte2/2020/07/5089381_Xetinhte_Ninja400_2021_7.jpg", alt: "Green Bike" },
            { url: "https://dailymuabanxe.net/wp-content/uploads/2023/11/Kawasaki-Ninja-500-5.webp", alt: "Green Bike" },
            { url: "https://dailymuabanxe.net/wp-content/uploads/2023/11/Kawasaki-Ninja-500-6.webp", alt: "Green Bike" },
          ]
        },
        {
          color: "#0000FF",
          images: [
            { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S6.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" },
            { url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20241007044304_S1.jpg&w=736&h=488&q=75&c=1", alt: "Blue Bike" }
          ]
        },
        {
          color: "black",
          images: [
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fkawasaki%2Fninja-zx-4r%2Fkawasaki-ninja-zx-4r-metallic-spark-black.jpg%3Fv%3D1697534375&w=750&q=75", alt: "Silver Bike" },
            { url: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fgallery%2Fkawasaki%2Fninja-zx-4r%2Fexterior%2Fkawasaki_ninja_zx-4r_class-leading-engine-performance.jpg%3Fv%3D2023-10-17&w=828&q=75", alt: "Silver Bike" }
          ]
        }
      ],
      id:"12",
      name: "KAWASAKI Z1000",
      details: "KAWASAKI Z1000: luôn đội mũ bảo hiểm, bảo vệ mắt và trang phục bảo hộ...",
      color: ["#008000", "#0000FF", "#C0C0C0"],
      sizes: ['Có Phanh ABS', 'Không Phanh ABS'],
      price: 16000,
      olds: 24000,
      quantity: 1
    },
    
  ];

  constructor() {}

  // Lấy danh sách sản phẩm
  getProducts() {
    return this.products;
  }

  // Lấy thông tin sản phẩm theo ID
  getProductById(id: string) {
    return this.products.find(product => product.id === id);
  }
}
