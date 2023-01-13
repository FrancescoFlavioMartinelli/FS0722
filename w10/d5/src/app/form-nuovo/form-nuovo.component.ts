import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-form-nuovo',
  templateUrl: './form-nuovo.component.html',
  styleUrls: ['./form-nuovo.component.scss']
})
export class FormNuovoComponent implements OnInit {


  @Output() addEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(inp:HTMLInputElement){
    this.addEvent.emit(inp.value)
    inp.value = ""
  }

}
