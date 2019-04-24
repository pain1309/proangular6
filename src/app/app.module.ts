import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  // tells Angular that it should load the root component
  declarations: [
    AppComponent,
  ],
  //  tells Angular that the root component is the AppModule class
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    NgbModule.forRoot()
  ],
  //  tells Angular about the shared objects used by the application
  providers: [],
  //  tells Angular that the root component is the AppModule class
  bootstrap: [AppComponent]
})
export class AppModule { }
