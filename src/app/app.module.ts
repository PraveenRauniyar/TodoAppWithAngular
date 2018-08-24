import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from './modal/modal.component';
import {DataService} from "./service/data.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
