import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../Shared_Classes_and_Types/IUser';
import { Observable, catchError,throwError } from 'rxjs';
import { IPosts } from '../Shared_Classes_and_Types/IPost';
import { IComment } from '../Shared_Classes_and_Types/Icomment';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _HttpClient:HttpClient) { }

  GetPosts():Observable<IPosts[]>
  {
       return this._HttpClient.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts').pipe(catchError((err)=>{
        return throwError(()=>err.message ||"server error");
      }));
  }
  GetComment(id:number):Observable<IComment[]>
  {
    return this._HttpClient.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).pipe(catchError((err)=>{
        return throwError(()=>err.message ||"server error");
      }));

  }

}
