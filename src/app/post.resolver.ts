import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { Post, PostsService } from "./posts.service";

@Injectable({providedIn: 'root'})
export class PostResolver implements Resolve<Post>{
  constructor(private postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post {
    return of(this.postsService.getById(+route.params['id']))
    .pipe(delay(1500))
  }
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post {
  //   return this.postsService.getById(+route.params['id'])
  // }

}
