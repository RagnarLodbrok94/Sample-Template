import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessModule } from './success/success.module';
import { WarningModule } from './warning/warning.module';

import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service'
import { TodoModule } from './todo/todo.module';

import { Task1Component } from './task1/task1.component';
import { MessageComponent } from './task1/message/message.component';
import { IvanComponent } from './task1/ivan/ivan.component';

import { Task2Component } from './task2/task2.component';
import { TitleComponent } from './task2/title/title.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    Task1Component,
    MessageComponent,
    IvanComponent,
    TitleComponent,
    Task2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SuccessModule,
    WarningModule,
    TodoModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
