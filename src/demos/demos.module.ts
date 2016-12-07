import {NgModule} from "@angular/core";

import AlertDemoModule from "./alerts/alert.demo.module";
import LayoutDemoModule from "./app-layout/layout.demo.module";

@NgModule({
  exports: [
    AlertDemoModule,
    LayoutDemoModule
  ]
})
export class DemosModule { }
