import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserById(id: any) {
    return this.allUsers.find(u=>u.id==id)
  }

  allUsers:User[] = []

  constructor() {
    this.fetchData()
  }

  getUsers() {
    return this.allUsers;
  }

  fetchData() {
    fetch("http://jsonplaceholder.typicode.com/users").then(res=>res.json()).then((u:User[])=>{
      console.log(u);
      this.allUsers = u
    })
  }
}
