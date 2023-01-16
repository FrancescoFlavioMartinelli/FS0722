import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() photo!:Photo

  liked = false //pulsante like

  loading = false

  constructor(private ps:PhotoService) { }

  ngOnInit(): void {
  }

  toggleLiked() {
    this.liked = !this.liked;
    if(this.liked) {
      this.ps.like()
    } else {
      this.ps.dislike()
    }
  }


  @Output() eliminaEvent:EventEmitter<number> = new EventEmitter()

  elimina() {
    this.loading = true
    this.ps.eliminaPhoto(this.photo).subscribe(()=>{
      //qua l'eliminazione http ha terminato
      this.eliminaEvent.emit(this.photo.id)
    })
  }


}
