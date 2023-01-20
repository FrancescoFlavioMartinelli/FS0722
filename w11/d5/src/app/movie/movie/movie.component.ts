import { Component, OnInit } from '@angular/core';
import { FavData, Favorite, Movie, MovieService } from '../movie.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movies:Movie[] = [];
  fav:Favorite[] = [];

  idUser!:number
  constructor(private ms:MovieService, private as:AuthService) {
    
  }

  ngOnInit(): void {
    this.ms.getMovies().subscribe((m)=>{
      this.movies = m
    })

    this.as.user.subscribe((r)=>{
      if(r){
        this.idUser = r.user.id
        this.ms.getFav(this.idUser).subscribe((f)=>{
          this.fav = f
        })
      }
    })

  }

  isLiked(m:Movie):boolean {
    return !!this.fav.find((f)=>f.idMovie == m.id)
  }

  toggleLike(m:Movie) {
    if(this.isLiked(m)) {
      //togliere
      let found = this.fav.find((f)=>f.idMovie == m.id)!.id
      this.ms.deleteLike(found)
    } else {
      //aggiungere
      let f : FavData = {
        idMovie: m.id,
        idUser: this.idUser
      }
      this.ms.addLike(f).subscribe((res)=>{
        this.fav.push(res) //questo solo con json-server
      })
    }
  }

}
