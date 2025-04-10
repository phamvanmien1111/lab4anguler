// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// export interface Post {
//   _id: string;
//   title: string;
//   body: string;
//   image: string;
// }
// @Component({
//   selector: 'app-lab6',
//   standalone: false,
//   templateUrl: './lab6.component.html',
//   styleUrl: './lab6.component.css'
// })
// export class Lab6Component  implements OnInit {
//   posts: Post[] = [];
//   loading: boolean = true;
//   error: string | null = null;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.fetchPosts();
//   }

//   fetchPosts(): void {
//     this.loading = true;
//     this.http.get<Post[]>('http://localhost:2000/posts')
//     // https://gorest.co.in/public/v2/posts
//       .subscribe({
//         next: (data) => {
//           this.posts = data;
//           this.loading = false;
//         },
//         error: (err) => {
//           this.error = 'Failed to load posts. Please try again later.';
//           this.loading = false;
//           console.error('Error fetching posts:', err);
//         }
//       });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Post {
  id: number;         
  user_id: number;  
  title: string;
  body: string;
}

@Component({
  selector: 'app-lab6',
  standalone: false,
  templateUrl: './lab6.component.html',
  styleUrls: ['./lab6.component.css']
})
export class Lab6Component implements OnInit {
  posts: Post[] = [];
  loading: boolean = true;
  error: string | null = null;
  userId: number = 7813905; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPostsByUserId();
  }

  // Phương thức lấy bài viết theo userId
  fetchPostsByUserId(): void {
    this.loading = true;
    this.error = null;

    this.http.get<Post[]>(`https://gorest.co.in/public/v2/users/${this.userId}/posts`)
      .subscribe({
        next: (data) => {
          this.posts = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Không thể tải bài viết. Vui lòng thử lại sau.';
          this.loading = false;
          console.error('Lỗi khi tải bài viết:', err);
        }
      });
  }

  // Phương thức để thay đổi userId (nếu cần)
  changeUserId(newUserId: number): void {
    this.userId = newUserId;
    this.fetchPostsByUserId();
  }
}