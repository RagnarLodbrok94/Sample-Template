import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessModule } from './success/success.module';
import { WarningModule } from './warning/warning.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuccessModule,
    WarningModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
