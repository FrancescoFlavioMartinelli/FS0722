import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss']
})
export class PrimoComponent implements OnInit {

  @Input() numero:any;

  constructor() { }

  ngOnInit(): void {
  }

}
