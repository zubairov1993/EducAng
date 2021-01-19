import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'
import { ModalComponent } from './modal/modal.component'
import { RefDirecrive } from './ref.directive'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // modal = false

  @ViewChild(RefDirecrive, {static: false}) refDir: RefDirecrive

  constructor(private resolver: ComponentFactoryResolver, private title: Title, private meta: Meta) {
    title.setTitle('app mkmsem')
    this.meta.addTags([
      {name: 'keywords', content: 'angular, google, appcomponent'},
      {name: 'description', content: 'this is appcomponent'}
    ])
  }

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent)
    this.refDir.containerRef.clear()
    const component = this.refDir.containerRef.createComponent(modalFactory)
    component.instance.title = 'Modal Window'
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear()
    })
  }
}

