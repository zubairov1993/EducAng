import { Component, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'хочу выучить ангуляр компоненты', text: 'еще учу', id: 1},
    {title: 'следующи блок', text: 'про компоненты', id: 2}
  ]

  updatePosts(post) {
    this.posts.unshift(post)
  }

  removePost(id: number) {
    console.log('id to remove: ', id);
    this.posts = this.posts.filter(p => p.id !== id)
  }

  ngOnInit(): void {
    // setTimeout( () => {
    //   console.log('setTimeout');
    //   this.posts[0] = {
    //     title: 'changed',
    //     text: 'changed3',
    //     id: 33
    //   }
    // },5000)
  }
}
