import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post:Post|undefined

  constructor(private ar:ActivatedRoute, private ps:PostService) { }

  ngOnInit(): void {
    // console.log(this.ar.snapshot.params['id'])
    let id = this.ar.snapshot.params['id'] //leggo sincronamente il parametro dall'url
    this.post = this.ps.getPostById(id)
  }

}
