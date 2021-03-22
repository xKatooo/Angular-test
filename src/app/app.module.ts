import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteDosComponent } from './componente-dos/componente-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteDosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
