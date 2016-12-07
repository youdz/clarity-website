import {Component} from "@angular/core";
import {TEMPLATES} from "./documentation-templates-stub";

const COMPONENTS = require("../../settings/componentlist.json");

export const ALL_DOCS = [];

for (let component of COMPONENTS.list) {
  if (component.url && TEMPLATES[component.url]) {
    @Component({
      selector: component.url,
      template: TEMPLATES[component.url]
    })
    class DocComponent {}

    ALL_DOCS.push({
      path: component.url,
      component: DocComponent,
      data: {
        bodyClass: "page-"+component.url
      },
    });
  }
}
