import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Lab4Component} from './lab4/lab4.component'
import { DetailComponent } from './detail/detail.component';
import { NotfoundComponent } from './notfound/notfound.component'
import { Lab5Component } from './lab5/lab5.component'
import { Lab6Component } from './lab6/lab6.component'
import { TodoComponent } from './todo/todo.component'

const routes: Routes = [
  { path:'' , redirectTo:"/productall" , pathMatch:'full'},
  { path:'productall' , component:Lab4Component},
  { path: 'detail/:id', component: DetailComponent },
  { path:'lab5',component:Lab5Component},
  { path:'lab6',component:Lab6Component},
  { path:'todo',component:TodoComponent},
  { path: '**', component: NotfoundComponent, title: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
