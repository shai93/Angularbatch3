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
import { DatapostComponent } from './datapost/datapost.component'
@NgModule({
  declarations: [
    AppComponent,
    first,
    BindingComponent,
    SecondComponent,
    FormsComponent,
    UserformComponent,
    CustomerformComponent,
    DatapostComponent
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
