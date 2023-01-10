import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss']
})
export class InactiveComponent implements OnInit {

  posts:Post[] = []

  constructor(private ps:PostService) {
   }

  ngOnInit(): void {
    // this.posts = this.ps.getPostFiltrati(false)

    this.ps.getPostsFiltrati(false).then((arr)=>{
      this.posts = arr
    })
  }
  

}
