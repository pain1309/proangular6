import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";


// create feature module
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  // tell angular which class should be used as services for the dependency injection feature
  providers: [ProductRepository, Cart, Order, OrderRepository, 
    { provide: StaticDataSource, useClass: RestDataSource}]
})
export class ModelModule { }
