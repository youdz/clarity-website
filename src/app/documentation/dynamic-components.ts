import {Component} from "@angular/core";
import {TEMPLATES} from "./documentation-templates-stub";

const COMPONENTS = require("../../settings/componentlist.json");

export const ALL_DOCS = [];

for (let component of COMPONENTS.list) {
  if (component.url && TEMPLATES[component.url]) {
    @Component({
      selector: component.url,
      template: `
        <section class="dox-header">
          <h1>{{title}}</h1>

          <div class="component-workstream-bugs">
            <span class="bug bug-html" [class.hidden]="!uiDone && !uiInProgress">
                <img src="assets/images/bugs/badge_html5{{uiInProgress?'_inprogress':''}}.svg"
                  alt="{{uiInProgress?'Development in Progress':'HTML5'}}"
                  title="{{uiInProgress?'Development in Progress':'HTML5'}}">
            </span>
            <span class="bug bug-css" [class.hidden]="!uiDone && !uiInProgress">
                <img src="assets/images/bugs/badge_css3{{uiInProgress?'_inprogress':''}}.svg"
                  alt="{{uiInProgress?'Development in Progress':'CSS3'}}"
                  title="{{uiInProgress?'Development in Progress':'CSS3'}}">
            </span>
            <span class="bug bug-ng" *ngIf="ngDone || ngInProgress">
                <img src="assets/images/bugs/badge_ng{{ngInProgress?'_inprogress':''}}.svg"
                  alt="{{uiInProgress?'Development in Progress':'Angular 2'}}"
                  title="{{uiInProgress?'Development in Progress':'Angular 2'}}">
            </span>
          </div>
          
          <div class="dox-tabs">
              <ul class="list-unstyled">
                  <!-- TODO handle scrolling and .active class -->
                  <li><a routerLink="#top" id="topTabLink" class="clrweb-tablink">Examples &amp; Code</a></li>
                  <li><a routerLink="#top" class="clrweb-tablink" id="guidelinesTabLink">Design Guidelines</a></li>
              </ul>
          </div>
        </section>

        <section class="dox-content">
          <div class="dox-content-wrapper">
            <a id="top"></a>
            ${ TEMPLATES[component.url] }
          </div>
        </section>
      `,
      host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
      }
    })
    class DocComponent {
      title = component.text;

      get uiDone() {
        return component.ui > 19;
      }

      get uiInProgress() {
        return 4 < component.ui && component.ui < 20;
      }

      get ngDone() {
        return component.ng > 19;
      }

      get ngInProgress() {
        return 4 < component.ng && component.ui < 20;
      }
    }

    ALL_DOCS.push({
      path: component.url,
      component: DocComponent,
      data: {
        bodyClass: "page-"+component.url
      },
    });
  }
}
