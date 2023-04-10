import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../Shared_Classes_and_Types/IUser';
import { Observable, catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {

  constructor(private _HttpClient:HttpClient) { }

  
  ngOnInit(): void {

   }
   GetUser():Observable<IUser[]>
   {
     return this._HttpClient.get<IUser[]>("https://jsonplaceholder.typicode.com/users").pipe(catchError((err)=>{
       return throwError(()=>err.message ||"server error");
     }));
   }
}
