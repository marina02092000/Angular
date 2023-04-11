import { Component } from '@angular/core';
import { IUser } from '../interface/user';
import {UserservicesService} from '../services/user-servies.servie'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  UsersList:IUser[]=[]
  errorMessage:any;
  constructor(public userservice:UserservicesService){

  }

  ngOnInit():void {
    this.userservice.GetUsers().subscribe({
      next:data=>this.UsersList=data,
      error:err=>this.errorMessage=err
    })
   
  }
}
