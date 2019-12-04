import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessModule } from './success/success.module';
import { WarningModule } from './warning/warning.module';

import { TodoModule } from './todo/todo.module';

import { Task1Component } from './task1/task1.component';
import { MessageComponent } from './task1/message/message.component';
import { IvanComponent } from './task1/ivan/ivan.component';

import { Task2Component } from './task2/task2.component';
import { TitleComponent } from './task2/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    IvanComponent,
    TitleComponent,
    Task1Component,
    Task2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SuccessModule,
    WarningModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
