import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  title: string
  text: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // e: number = Math.E
  // str = 'hello world'
  // date: Date = new Date()
  // float = 0.42
  // obj = {
  //   a: 1,
  //   b: {
  //     c: 2,
  //     d: {
  //       e: 3,
  //       f: 4
  //     }
  //   }
  // }

  // search = ''
  // searchField = 'title'
  // posts: Post[] = [
  //   {title: 'Milk', text: 'the best milk in the sdsc world'},
  //   {title: 'Bread', text: 'the best Bread in the iii world'},
  //   {title: 'COn', text: 'the best COn in the js world'}
  // ]
  // addPost() {
  //   this.posts.unshift({
  //     title: 'Angular 8',
  //     text: 'fffes'
  //   })
  // }

p: Promise<string> = new Promise<string>(resolve => {
  setTimeout(() => {
    resolve('Promise Resolved')
  }, 4000)
})

date: Observable<Date> = new Observable(obs => {
  setInterval(() => {
    obs.next(new Date())
  }, 1000)
})
}
