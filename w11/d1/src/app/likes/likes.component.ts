import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {


  likes:number = 0

  constructor(private ps:PhotoService) { }

  ngOnInit(): void {
    // this.likes = this.ps.likeCounter
    // this.ps.likeSubj.asObservable().subscribe((n)=>{})
    this.ps.likeObs.subscribe((n)=>{
      this.likes = n
    })
  }

}
