import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {


  @Input() post!:Post;

  
  constructor() { }
  
  ngOnInit(): void {
  }

}
