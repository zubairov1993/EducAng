import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import { CounterComponent } from './counter/counter.component'
import {PostsComponent} from "./posts/posts.component";


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
