import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface Todo {
  id: number;
  user_id: number;
  title: string;
  due_on: string;
  status: 'completed' | 'pending';
}
@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  loading: boolean = true;
  error: string | null = null;
  userId: number = 7374936; 
  newTodoForm: FormGroup;
  showForm = false;

  private headers = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer e7685519ecbe1ac6f2bdbf323c610fb560fef30f6cd834c615e32ffe31e66027",
  });

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.newTodoForm = this.fb.group({
      title: ['', Validators.required],
      due_on: ['', Validators.required],
      status: ['pending', Validators.required]
    });
  }

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.http.get<Todo[]>(`https://gorest.co.in/public/v2/users/${this.userId}/todos`, { headers: this.headers })
      .subscribe({
        next: (todos) => this.todos = todos,
        error: (err) => {
          this.error = 'Failed to fetch todos';
          console.error('Error:', err);
        }
      });
  }

  createTodo() {
    if (this.newTodoForm.invalid) return;

    const newTodo = {
      ...this.newTodoForm.value,
      user_id: this.userId
    };

    this.http.post<Todo>('https://gorest.co.in/public/v2/todos', newTodo, { headers: this.headers })
      .subscribe({
        next: (todo) => {
          this.todos.unshift(todo);
          this.newTodoForm.reset();
          this.showForm = false;
        },
        error: (err) => {
          this.error = 'Failed to create todo';
          console.error('Error:', err);
        }
      });
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}


// export class TodoComponent implements OnInit {
//   todos: Todo[] = [];
//   loading: boolean = true;
//   error: string | null = null;
//   userId: number = 7374935;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.fetchTodosByUserId();
//   }

//   fetchTodosByUserId(): void {
//     this.loading = true;
//     this.error = null;

//     this.http.get<Todo[]>(`https://gorest.co.in/public/v2/users/${this.userId}/todos`)
//       .subscribe({
//         next: (data) => {
//           this.todos = data;
//           this.loading = false;
//         },
//         error: (err) => {
//           this.error = 'Failed to load todos. Please try again later.';
//           this.loading = false;
//           console.error('Error fetching todos:', err);
//         }
//       });
//   }

//   changeUserId(newUserId: number): void {
//     this.userId = newUserId;
//     this.fetchTodosByUserId();
//   }

//   formatDate(dateString: string): string {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   }
// }