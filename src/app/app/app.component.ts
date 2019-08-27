import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IPost } from '../IPosts';
import { PostError } from './PostError';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  Posts:IPost[] |PostError;
constructor(private dataService:DataService)
{
    
}

ngOnInit()
{
  this.dataService.getPosts()
                  .subscribe( (data)=>{
                    this.Posts=data
                  },
                  (error)=>{console.log(error.number),
                  ()=>{console.log("completed")}});
}



CreatePost()
{
  this.dataService.createPost()
  .subscribe((data)=>console.log(data));
}

}