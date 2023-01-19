import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3000/users"

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
    fetch(this.url).then(res=>res.json()).then((u:User[])=>{
      console.log(u);
      this.allUsers = u
    })
    //TODO
  }
}
