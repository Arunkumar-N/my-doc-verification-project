import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDocVerificationModule } from 'my-doc-verification';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyDocVerificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
