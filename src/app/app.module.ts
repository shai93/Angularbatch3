import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FirstComponent as first} from './first/first.component';
import { BindingComponent } from './binding/binding.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    first,
    BindingComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
