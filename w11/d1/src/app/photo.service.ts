import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject, filter, map, take, tap } from 'rxjs';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  constructor(private http:HttpClient) { }
  
  likeCounter = 0

  likeSubj = new Subject<number>()
  // likeSubj = new ReplaySubject<number>() //quando si fa il subscribe viene chiamata la callback con l'ultimo valore inviato
  // likeSubj = new BehaviorSubject<number>(100) //come la replay ma ha un dato di partenza


  //lo creo nel service se voglio aggiugnere delle pipes
  likeObs = this.likeSubj.asObservable().pipe(tap((n)=>{
    console.log("TAP LIKE", n);
  }))

  
  like(){
    this.likeCounter++
    this.likeSubj.next(this.likeCounter)
  }
  dislike(){
    this.likeCounter--
    this.likeSubj.next(this.likeCounter)
  }

  getPhotos() {
    let o = this.http.get<Photo[]>('http://jsonplaceholder.typicode.com/photos')

    // let p = o.pipe(
    //   map((res)=>{
    //     return res.splice(0, 10)
    //   }),
    // )

    // return p
    return o
  }

  //////
  eliminaPhoto(p:Photo) {
    return this.http.delete('http://jsonplaceholder.typicode.com/photos/'+p.id)
  }

}
