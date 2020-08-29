import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlanticComponent } from 'src/app/atlantic/atlantic.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AtlanticComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AtlanticComponent
  ]
})
export class AtlanticModule { }
