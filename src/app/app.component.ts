import {Component, ElementRef, OnInit, Renderer} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";

const TITLE = require('../settings/global.json').alt_title;

@Component({
  selector: 'body',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private renderer: Renderer, private el: ElementRef, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((change: any) => {
      if (change instanceof NavigationEnd) {
        this.bodyClasses.forEach(className => this.renderer.setElementClass(this.el.nativeElement, className, false));
        this.updateBodyClasses();
        this.bodyClasses.forEach(className => this.renderer.setElementClass(this.el.nativeElement, className, true));
      }
    });
  }

  bodyClasses = [];
  updateBodyClasses() {
    let route = this.router.routerState.snapshot.root;
    this.bodyClasses.length = 0;
    while(route) {
      if (route.data && route.data["bodyClass"]) {
        this.bodyClasses.push(route.data["bodyClass"]);
      }
      route = route.firstChild;
    }
  }

  public title = TITLE;
}
