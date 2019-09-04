import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,tap,map} from 'rxjs/operators';
import { IPost } from './IPosts';
import { PostError } from './app/PostError';

@Injectable(
{
providedIn:'root'
})



export class DataService 
{

constructor(private http:HttpClient)
{

}


getPosts():Observable<IPost[]|PostError>
{
  return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
                  .pipe(catchError(err=>this.HandleError(err)));
}

createPost():Observable<IPost[]|PostError>
{
  return this.http.post<IPost[]>('https://jsonplaceholder.typicode.com/posts',
  {
    title: 'foo',
    body: 'bar',
    userId: 1
  },
  {
    headers:new HttpHeaders(
    {
     'content-type':'application/json'
    })
  }).pipe(catchError(err=>this.HandleError(err)));
}

   HandleError(err:HttpErrorResponse):Observable<PostError>
   {
   let postError=new PostError();
   postError.errorNumber=800;
   return throwError(postError);

  }



}