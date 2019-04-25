import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./store-first.guard";

@NgModule({
  // tells Angular that it should load the root component
  declarations: [
    AppComponent,
  ],
  //  tells Angular that the root component is the AppModule class
  imports: [BrowserModule, StoreModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard]},
      { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard]},
      { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]},
      { path: "**", redirectTo: "/store" }
    ])],
  //  tells Angular about the shared objects used by the application
  providers: [StoreFirstGuard],
  //  tells Angular that the root component is the AppModule class
  bootstrap: [AppComponent]
})
export class AppModule { }
