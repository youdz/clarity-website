import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from "./documentation.component";
import {DocumentationNavLinksComponent} from "./documentation-nav-links.component";
import {ComponentStatusComponent} from "./component-status/component-status.component";
import {StatusDotComponent} from "./component-status/status-dot.component";
import {ALL_DOCS} from "./dynamic-components";
import {DemosModule} from "../../demos/demos.module";

@NgModule({
  declarations: [
    DocumentationComponent,
    DocumentationNavLinksComponent,
    ComponentStatusComponent,
    StatusDotComponent,
    ...ALL_DOCS.map(({component}) => component)
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DocumentationRoutingModule,
    DemosModule
  ],
  providers: []
})
export class DocumentationModule { }
