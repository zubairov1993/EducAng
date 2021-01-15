import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
// import { AppCounterService } from './services/app-counter.service';



@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    // AppCounterService // подключил через @Injectable в Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
