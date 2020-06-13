import { NgModule } from '@angular/core';
import { MyDocVerificationComponent } from './my-doc-verification.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [MyDocVerificationComponent],
  imports: [
    BrowserModule,
  ],
  exports: [MyDocVerificationComponent]
})
export class MyDocVerificationModule { }
