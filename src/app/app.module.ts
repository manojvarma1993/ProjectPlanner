import { NgModule  } from '@angular/core';
import {AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './data.service';
@NgModule(
{
imports:[BrowserModule,HttpClientModule,RouterModule.forRoot(routes)],
exports:[],
declarations:[AppComponent,FirstComponent,SecondComponent],
providers:[PostService],
bootstrap:[AppComponent]


})


export class AppModule
{

}
