import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StyleDirective } from './directives/stule.directive';
import { IfnotDirective } from './directives/ifnot.directive';


@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    IfnotDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
