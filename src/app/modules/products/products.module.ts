import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[DemoComponent]
})
export class ProductsModule {
  constructor(){
    console.log('products module')
  }
 }
