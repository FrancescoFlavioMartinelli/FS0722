import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface LoginData {
  email: string,
  password: string
}
export interface SignupData {
  email: string,
  name: string,
  password: string
}

export interface AuthData {
  accessToken: string,
  user: {
    id: number,
    name: string,
    email: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  authSubj = new BehaviorSubject<null|AuthData>(null);
  user = this.authSubj.asObservable()
  logged = this.user.pipe(map((res)=>!!res))

  constructor(private http:HttpClient) { }

  login(d:LoginData) {
    return this.http.post<AuthData>(environment.api+"login", d).pipe(tap((res)=>{
      localStorage.setItem("user", JSON.stringify(res))
      this.authSubj.next(res)
    }))
  }

  signup(d:SignupData) {
    return this.http.post<AuthData>(environment.api+"signup", d)
  }

  logout() {
    localStorage.removeItem("user")
    this.authSubj.next(null)
  }

}
