import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';

import { GetStartedComponent } from "./get-started.component";
import {RouterModule, Routes} from "@angular/router";

const route: Routes = [
  {
    path: "",
    component: GetStartedComponent,
    data: {
      bodyClass: "layout-get-started"
    }
  }
];


@NgModule({
  declarations: [
    GetStartedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  providers: []
})
export class GetStartedModule { }
