import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

  posts:Post[] = []


  // pSrv:PostService;

  constructor(private ps:PostService) {
    // this.pSrv = ps
   }

  ngOnInit(): void {
    // this.posts = this.ps.getPostFiltrati(true)
   
    this.ps.getPostsFiltrati(true).then((arr)=>{
      this.posts = arr
    })
    // this.posts = await this.ps.getPostsFiltered(true)
    //this.ps.getPostsFiltered(true).then(arr=>{this.posts = arr})

  }

}
