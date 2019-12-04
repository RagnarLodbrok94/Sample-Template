import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';


const appRoutes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'task1', component: Task1Component },
  { path: 'task2', component: Task2Component }
];

@NgModule({
  imports: [ RouterModule.forRoot( appRoutes )],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
