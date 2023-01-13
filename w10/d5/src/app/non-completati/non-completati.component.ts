import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-non-completati',
  templateUrl: './non-completati.component.html',
  styleUrls: ['./non-completati.component.scss']
})
export class NonCompletatiComponent implements OnInit {

  t:Todo[] = [];

  constructor(private ts:TodoService) { }

  ngOnInit(): void {

    this.ts.getTodos(false).then((res)=>{
      this.t = res
    })
  }


  addTodo(title:string){
    console.log(title);
    //aggiornare il service
    //aggiornare l'array locale
    this.ts.addTodo(title).then((todo:any)=>{
      this.t.push(todo)
    })
  }

}
