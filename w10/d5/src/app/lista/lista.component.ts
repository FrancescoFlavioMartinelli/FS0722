import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() todos:Todo[] = []

  // completa:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
