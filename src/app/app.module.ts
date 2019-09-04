import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { DataService } from './data.service';
import { FirstComponent } from './first/first.component';
import { HttpClientModule } from '@angular/common/http';
import { SecondComponent } from './second/second.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {routes } from './routes';
@NgModule(
{
imports:[BrowserModule,HttpClientModule,RouterModule.forRoot(routes),ReactiveFormsModule],
exports:[],
declarations:[AppComponent, FirstComponent, SecondComponent],
providers:[DataService],
bootstrap:[AppComponent]
})



export class AppModule
{

}