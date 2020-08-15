import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FirstComponent as first} from './first/first.component';
import { BindingComponent } from './binding/binding.component';
import { SecondComponent } from './second/second.component';
import { FormsComponent } from './forms/forms.component';
import { UserformComponent } from './userform/userform.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { ApiService } from './api.service';
import  {HttpClientModule} from '@angular/common/http';
import { DatapostComponent } from './datapost/datapost.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { SearchComponent } from './search/search.component';
import { HookComponent } from './hook/hook.component'
@NgModule({
  declarations: [
    AppComponent,
    first,
    BindingComponent,
    SecondComponent,
    FormsComponent,
    UserformComponent,
    CustomerformComponent,
    DatapostComponent,
    Child1Component,
    Child2Component,
    SearchComponent,
    HookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
