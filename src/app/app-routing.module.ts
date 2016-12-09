import { NgModule }             from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  {
    path: "get-started",
    loadChildren: 'app/get-started/get-started.module#GetStartedModule',
  },
  {
    path: 'documentation',
    loadChildren: 'app/documentation/documentation.module#DocumentationModule',
  },
  {
    path: "community",
    loadChildren: 'app/community/community.module#CommunityModule',
  },
  {
    path: "news",
    loadChildren: 'app/news/news.module#NewsModule',
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
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
