import { EMPTY, of } from "rxjs"
import { PostsComponent } from "./posts.component"
import { PostsService } from "./posts.service"

describe('PostsComponent', () => {
  let component: PostsComponent
  let service: PostsService

  beforeEach(() => {
    service = new PostsService(null)
    component = new PostsComponent(service)
  })

  it('fetch ngonint', () => {
    const spy = spyOn(service, 'fetch').and.callFake(() => {
      return EMPTY
    })
    component.ngOnInit()
    expect(spy).toHaveBeenCalled()
  })
  it('fetch ngonint', () => {
    spyOn(service, 'fetch').and.callFake(() => {
      return of([1,2,3,4])
    })
    component.ngOnInit()
    expect(component.posts.length).toBe(4)
  })

})
