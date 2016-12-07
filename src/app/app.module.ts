import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GetStartedComponent } from './get-started/get-started.component';
import {DocumentationModule} from "./documentation/documentation.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DocumentationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
