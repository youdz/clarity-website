import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from "./documentation.component";
import {ALL_DOCS} from "./dynamic-components";
import AlertDemoModule from "../../demos/alerts/alert.demo.module";

@NgModule({
  declarations: [
    DocumentationComponent,
    ...ALL_DOCS.map(({component}) => component)
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DocumentationRoutingModule,
    AlertDemoModule
  ],
  providers: []
})
export class DocumentationModule { }
