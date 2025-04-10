import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lab4Component } from './lab4/lab4.component';
import { DetailComponent } from './detail/detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Lab5Component } from './lab5/lab5.component';
import { Lab6Component } from './lab6/lab6.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component'; 
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Lab4Component,
    DetailComponent,
    NotfoundComponent,
    Lab5Component,
    Lab6Component,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule 
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
