import { Component, OnInit } from '@angular/core';

class Todo {
  constructor(
    public title: string,
    public completed: boolean = false ) {}
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      title: 'Задача 1',
      completed: true
    },
    {
      title: 'Задача 2',
      completed: false
    },
    {
      title: 'Задача 3',
      completed: false
    }
  ];

  create( event: Event, title: string ) {
    event.preventDefault;
    let todo: Todo = new Todo( title );
    this.todos.push( todo );
  }

  toggle( todo: Todo ) {
    todo.completed = !todo.completed;
  }

  delete( todo: Todo ) {
    let index = this.todos.indexOf( todo );

    if( index > -1 ) {
      this.todos.splice( index, 1 );
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
