import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  t:Todo[] = []; //essendo l'origina dei dati dell'input questo array rappresenta ciò che c'è a schermo

  constructor(private ts:TodoService) { }

  ngOnInit(): void {
    //callback pattern
    // this.ts.getTodos((arr:Todo[])=>{
    //   console.log(arr);
    //   this.t = arr
    // })

    this.ts.getTodos(true).then((res)=>{
      this.t = res
    })

  }

}
