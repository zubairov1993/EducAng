import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component'
import { RefDirecrive } from './ref.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    RefDirecrive
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
