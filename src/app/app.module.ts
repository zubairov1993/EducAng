import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { SwitchComponent } from './switch/switch.component';



@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
