import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'хочу выучить ангуляр компоненты', text: 'еще учу', id: 1},
    {title: 'следующи блок', text: 'про компоненты', id: 2}
  ]
}
