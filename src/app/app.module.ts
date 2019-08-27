import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../app/data.service';
@NgModule(
{
imports:[BrowserModule,HttpClientModule],
exports:[],
declarations:[AppComponent],
providers:[DataService],
bootstrap:[AppComponent]


})

export class AppModule
{

}