import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { IndiaUsaComponent } from './india-usa/india-usa.component';
import { AtlanticComponent } from './atlantic/atlantic.component';
import { PacificComponent } from './pacific/pacific.component';

const routes: Routes = [
  // {
  //   path:"",    //base url
  //   redirectTo:"india-usa",
  //   pathMatch:"full"
  // },
  {
    path:"list",
    component:ListComponent
  },
  {
    path:"india-usa",
    component:IndiaUsaComponent,
    children:[
      {
        path:'atlantic',
        component:AtlanticComponent
      },
      {
        path:'pacific',
        component:PacificComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



