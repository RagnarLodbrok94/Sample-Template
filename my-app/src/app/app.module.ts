import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessModule } from './success/success.module';
import { WarningModule } from './warning/warning.module';
import { TodoModule } from './todo/todo.module';
import { TitleComponent } from './title/title.component';
import { MessageComponent } from './message/message.component';
import { IvanComponent } from './ivan/ivan.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MessageComponent,
    IvanComponent
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
