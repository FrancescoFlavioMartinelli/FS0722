import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {


  posts:Post[] = this.ps.getPostFiltrati(true);

  constructor(private ps:PostService) { }

  ngOnInit(): void {}

  disattiva(id:number) {
    console.log(id);
    this.posts = this.posts.filter(p=>p.id!=id)
    this.ps.toggle(id);
  }

}
