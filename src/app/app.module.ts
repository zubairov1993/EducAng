import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutExtraComponent,
    HomeComponent,
    PostComponent,
    PostsComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
