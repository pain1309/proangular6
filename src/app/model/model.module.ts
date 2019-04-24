import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';

// create feature module
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // tell angular which class should be used as services for the dependency injection feature
  providers: [ProductRepository, StaticDataSource]
})
export class ModelModule { }