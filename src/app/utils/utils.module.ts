import { NgModule } from '@angular/core';

import { SketchTemplateLinkDirective } from './sketch-template-link.directive';

@NgModule({
  declarations: [
    SketchTemplateLinkDirective
  ],
  exports: [
    SketchTemplateLinkDirective
  ]
})
export class UtilsModule { }
