import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  idcounter = 0

  todos:Todo[] = [
    // {
    //   id: 0,
    //   title: "t0",
    //   completed: true
    // },
    // {
    //   id: 1,
    //   title: "t1",
    //   completed: false
    // },
    // {
    //   id: 2,
    //   title: "t2",
    //   completed: true
    // }
  ]

  constructor() { }

  // callback function
  // getTodos(operazione:Function) {
  //   setTimeout(()=>{
  //     operazione(this.todos)
  //   }, 2000)
  // }

  getTodos(c:boolean):Promise<any> {
    let p = new Promise((succ, err)=>{
      setTimeout(()=>{
        succ(this.todos.filter(t=>t.completed==c))
      }, 2000)
    })
    return p
  }

  addTodo(title:string) {
    return new Promise((succ, err)=>{
      setTimeout(()=>{
        this.idcounter++
        let newT = {
          id: this.idcounter,
          title: title,
          completed: false
        }
        this.todos.push(newT)
        succ(newT)
      }, 2000)
    })
  }

  completa(id:number) {
    return new Promise((succ)=>{
      setTimeout(()=>{
        this.todos = this.todos.map((t)=>{
          if(t.id == id) t.completed = true
          return t
        })
        succ(id)
      }, 2000)
    })
  }

  elimina(id:number) {
    return new Promise((succ)=>{
      setTimeout(()=>{
        this.todos = this.todos.filter((t)=>{
          return t.id != id
        })
        succ(id)
      }, 2000)
    })
  }

}
