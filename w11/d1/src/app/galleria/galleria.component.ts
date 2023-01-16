import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.scss']
})
export class GalleriaComponent implements OnInit {

  photos:Photo[] = []

  constructor(private ps:PhotoService) { }

  ngOnInit(): void {
    this.ps.getPhotos().subscribe((res)=>{
      console.log("GALLERIA", res);
      this.photos = res
    })
  }

  delete(id:number) {
    this.photos = this.photos.filter((photo) =>{
      return photo.id != id
    })
  }

}
