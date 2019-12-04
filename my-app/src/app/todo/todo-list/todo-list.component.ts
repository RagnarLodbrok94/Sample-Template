import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/shared/models/todo.model';
import { TodoService } from 'src/app/shared/services/todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor( private todoSevice: TodoService ) {
    this.todos = [];
  }

  ngOnInit() {
    this.todos = this.todoSevice.getTodos();
  }

  toggle( todo: Todo ) {
    this.todoSevice.toggleTodo( todo );
  }
    
  delete( todo: Todo ) {
    this.todoSevice.deleteTodo( todo );
  }
}