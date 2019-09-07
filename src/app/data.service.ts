import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from './IPosts';
import { Observable, throwError } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';
import { PostError } from '../app/app/PostError';
@Injectable()

export  class PostService
{

constructor(private http: HttpClient)
{

}


getPosts():Observable<IPost[]|PostError>
{
  return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
                  .pipe(
                  catchError(err=>this.handleErr(err)),
                  );
}
  handleErr(handleErr: any):Observable<PostError>
  {
   let p=new PostError();
   p.errorNumber=400;
   return throwError(p);

  }



}



