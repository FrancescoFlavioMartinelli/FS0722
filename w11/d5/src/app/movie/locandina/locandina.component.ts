import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie.service';

@Component({
  selector: 'app-locandina',
  templateUrl: './locandina.component.html',
  styleUrls: ['./locandina.component.scss']
})
export class LocandinaComponent implements OnInit {

  @Input() m:Movie
  liked = false

  constructor() { }

  ngOnInit(): void {
  }

}
