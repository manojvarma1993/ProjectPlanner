import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { IPost } from './IPosts';
import { PostError } from './app/PostError';
import { Observable,throwError } from 'rxjs';
import { catchError,map} from 'rxjs/operators';

@Injectable(
  {
  providedIn:'root'
  })


export class DataService
{

constructor(private http:HttpClient)
{

}

public  getPosts():Observable<IPost[]| PostError>
{
 return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/post')
                  .pipe(catchError(err=>this.handleHttpErro(err)));
                 
}


public handleHttpErro(error:HttpErrorResponse):Observable<PostError>
{
  let postError=new PostError();
  postError.errorNumber=20;
  return throwError(postError);

}

public createPost():Observable<IPost>
{
  
  return this.http.post<IPost>('https://jsonplaceholder.typicode.com/posts',
  {
    title:'foo',
    body:'bar',
    userId:1
  },
  {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
   })
  });
}

}



