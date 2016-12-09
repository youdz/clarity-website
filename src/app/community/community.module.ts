import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';

import { CommunityComponent } from "./community.component";
import {RouterModule, Routes} from "@angular/router";

const route: Routes = [
  {
    path: "",
    component: CommunityComponent,
    data: {
      bodyClass: "layout-community"
    }
  }
];


@NgModule({
  declarations: [
    CommunityComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  providers: []
})
export class CommunityModule { }
