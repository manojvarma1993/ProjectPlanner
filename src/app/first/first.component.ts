import { Component, OnInit } from '@angular/core';
import { PostService } from '../data.service';
import { post } from 'selenium-webdriver/http';
import { IPost } from 'src/IProduct';
import { PostError } from '../app/PostError';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit 
{
 post:any;
constructor(private dataservice:PostService)
{

}

  ngOnInit()
  {
   
    this.dataservice.getPosts()
                    .subscribe((data=>{
                          this.post=data;
                        }),
                        (err=>console.log(err)),
                        (()=>{console.log("completed")}));
    

  }




}
