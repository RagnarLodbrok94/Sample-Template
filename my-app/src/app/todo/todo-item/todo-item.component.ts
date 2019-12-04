import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Todo } from 'src/app/shared/models/todo.model'

@Component({
  selector: 'app-todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['todo-item.component.scss']
})

export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter(); 
  @Output() toggle = new EventEmitter(); 

  onToggle() {
    this.toggle.emit( this.todo );
  }

  onDelete() {
    this.delete.emit( this.todo );
  }
}