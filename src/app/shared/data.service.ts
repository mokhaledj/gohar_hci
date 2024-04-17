import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private todos: Todo[]=[
  ]

  constructor() { }
  getAllTodos(){
    return this.todos
  }
  addTodo(todo:Todo)
  {
    this.todos.push(todo)
  }
  upadteTodo(index:number,upadteTodo:Todo){
    this.todos[index]=upadteTodo
  }
  deleteTodo(index:number){
    this.todos.splice(index,1)
  }

}
