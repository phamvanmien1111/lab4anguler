import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Lab4Component} from './lab4/lab4.component'
import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
   {path:'' , redirectTo:"/productall" , pathMatch:'full'},
  {path:'productall' , component:Lab4Component},
  { path: 'detail/:id', component: DetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
