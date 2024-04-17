import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { DataService } from '../shared/data.service';
import { FormsModule }   from '@angular/forms';
import { Data } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})

export class TodosComponent implements OnInit{
@Input() todo:Todo
@Output() todoClicked:EventEmitter<void>=new EventEmitter()
showForm: boolean ;
  todos:Todo[]
  // =[new Todo("sss"),new Todo("sss"),new Todo("sss")]
  constructor(private dataService:DataService) { }
  ngOnInit():void{
    this.todos=this.dataService.getAllTodos();
  }
  
  onFormSubmit(form:NgForm){
    if(!form.valid) 
      {return alert("Please enter a valid Task")}
    else{
    console.log(form.value.descr)
    this.dataService.addTodo(new Todo(form.value.text_,false,form.value.description,form.value.duedate))
    
    }
  }
  onTodoClicked(todo:Todo){
      todo.completed=!todo.completed;
  }
  deleteTask(todo:Todo){
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    
    
  }
  }
  openForm(){

    this.showForm=true;
    
    
}
 closeForm() {
  this.showForm=false;

}
updateTodo(form:NgForm,todo:Todo){
  const index = this.todos.indexOf(todo);
  if (index !== -1) {
    this.todos[index].description=form.value.description;
    this.todos[index].duedate=form.value.duedate;
    this.todos[index].text=form.value.text_;
  }
}
}
