import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../Shared_Classes_and_Types/IUser';
import { UsersService } from '../Services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  ListUser:IUser[]=[];
  errormessage='';
  constructor(private  UserServices:UsersService)
  {

  }


 ngOnInit(): void {
  this.UserServices.GetUser().subscribe(
  {
    next:data=>this.ListUser=data,
    error:error=>this.errormessage=error,
  }
 )}


}


