import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() compl!:boolean

  @Input() todos:Todo[] = []

  @Output() buttonEvent = new EventEmitter()

  // completa:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  completaElimina(id:number) {
    this.buttonEvent.emit(id)
  }

}
