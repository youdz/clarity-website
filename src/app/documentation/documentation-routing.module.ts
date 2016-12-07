import {NgModule}             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DocumentationComponent} from "./documentation.component";
import {ALL_DOCS} from "./dynamic-components";

const documentationRoutes: Routes = [
  {
    path: "documentation",
    component: DocumentationComponent,
    data: {
      bodyClass: "layout-documentation"
    },
    children: ALL_DOCS
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(documentationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DocumentationRoutingModule {}
