import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';

import { NewsComponent } from "./news.component";
import {RouterModule, Routes} from "@angular/router";

const route: Routes = [
  {
    path: "",
    component: NewsComponent,
    data: {
      bodyClass: "layout-community"
    }
  }
];


@NgModule({
  declarations: [
    NewsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  providers: []
})
export class NewsModule { }
