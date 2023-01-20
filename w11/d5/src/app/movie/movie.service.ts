import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Movie {
  id:number,
  poster_path:string,
  title:string
}

// http://localhost:4201/favorites?userId=1

export interface Favorite {
  id: number, //automaticamente da json-sever
  idMovie: number,
  idUser: number
}

export interface FavData {
  idMovie: number,
  idUser: number
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getMovies() {
    return this.http.get<Movie[]>(environment.api +"movies-popular")
  }

  getFav(uid:number) {
    return this.http.get<Favorite[]>(environment.api +"favorites").pipe(map((f)=>{
      return f.filter((fav)=>fav.idUser == uid)
    }))
  }

  deleteLike(idFav:number) {
    return this.http.delete(environment.api +"favorites/"+idFav)
  }

  addLike(fav:FavData) {
    return this.http.post<Favorite>(environment.api +"favorites", fav)
  }


}
