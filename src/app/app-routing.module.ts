import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {GetStartedComponent} from "./get-started/get-started.component";

const appRoutes: Routes = [
  {
    path: "get-started",
    component: GetStartedComponent,
    data: {
      bodyClass: "layout-get-started"
    }
  },
  {
    path: 'documentation',
    loadChildren: 'app/documentation/documentation.module#DocumentationModule',
  },
  {
    path: "",
    component: HomeComponent,
    data: {
      bodyClass: "layout-home"
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
