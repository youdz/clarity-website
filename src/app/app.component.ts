import {Component, ElementRef, OnInit, Renderer} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";

const TITLE = require('../settings/global.json').alt_title;

const SHOW_NAV = "show-leftnav";
const SHOW_SIDEBAR = "show-sidebar";

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

  toggleTopNav() {

  }

  toggleSideNav() {

  }

  toggleNav(topNavOrSidebar) {
    // var activeNavClass = (topNavOrSidebar == "topnav") ? SHOW_NAV : SHOW_SIDEBAR;
    // var inactiveNavClass = (topNavOrSidebar == "topnav") ? SHOW_SIDEBAR : SHOW_NAV;
    // var currentlyActive = this.el.nativeElement.classList.contains(activeNavClass);
    //
    // if (currentlyActive) {
    //   // clicking on hamburger while already open closes nav...
    //   $bd.removeClass(activeNavClass);
    // } else {
    //   $bd.removeClass(inactiveNavClass);
    //   $bd.addClass(activeNavClass);
    // }
  }
}
