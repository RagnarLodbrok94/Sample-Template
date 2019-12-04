import{ Component }  from '@angular/core';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
    selector: 'app-todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.scss']
})

export class TodoFormComponent {
    title: string = '';

    constructor( private todoService: TodoService ) {}

    onSubmit() {
        this.todoService.createTodo( this.title );
        this.title = '';
    }
}