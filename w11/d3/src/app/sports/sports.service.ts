import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { catchError, map, take } from 'rxjs';

export interface Sport {
    nome: string,
    id: number
}

@Injectable({
  providedIn: 'root'
})
export class SportsService {
  getSports() {
    let token = ""
    //Dobbiamo leggere il token
    //o dal localStorage
    //let token = localStorage.getItem('token');
    // if(!token) return //attenzione che getItem può dare null
    //oppure usando la subject (in quanto il next() "positivo" avviene nello stesso momento del loacalStorage.setItem()) 
    // this.as.isLoggedIn$.subscribe((res)=>{
    //   if(res) {
    //     token = localStorage.getItem('token')!
    //   }
    // })

    // this.as.user$.subscribe((res)=>{
    //   if(res) {
    //     token = res.accessToken
    //qua dovremmo fare il return
    //   }
    // })

  //   return this.as.user$.pipe(take(1), map((res)=>{
  //     if(res) {
  //       //per queste chiamate va messo il JWT negli headers
  //       let headers = {
  //         //le proprietà sono da indicare come stringhe
  //         "authorization": `Bearer ${res.accessToken}`
  //       }
  //       return this.http.get<Sport[]>('http://localhost:4201/sports', {headers: headers});
  //   } else {
  //     console.log(res);
  //     return undefined
  //   }
  // }))

  return this.http.get<Sport[]>('http://localhost:4201/sports').pipe(catchError((err)=>{
    console.log(err);
    throw err
  }))
}

  constructor(private http:HttpClient, private as:AuthService) { }
}
