import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';

export interface SignupData {name:string, email:string, password:string}

export interface AuthResponse {
  accessToken: string,
  user: {
    email: string,
    id: number,
    nome: string
  }
}

export interface LoginData {
  email:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSubj = new BehaviorSubject<null|AuthResponse>(null)
  authObs = this.authSubj.asObservable()
  loggedObs = this.authObs.pipe(map((res)=>{
    if(res) {return true}
    return false
  }))

  url = "http://localhost:3000/"

  logged = false

  constructor(private http:HttpClient) { }

  signup(data:SignupData){
    return this.http.post<AuthResponse>(this.url + "signup", data)
  }

  login(data:LoginData) {
    return this.http.post<AuthResponse>(this.url+"login", data).pipe(tap((res)=>{
      //salvare in storage -> autologin
      localStorage.setItem("auth", JSON.stringify(res))
      //notificare i component
      this.authSubj.next(res)
    }))
  }

  logout() {
    localStorage.removeItem("auth")
    this.authSubj.next(null)
  }
}
