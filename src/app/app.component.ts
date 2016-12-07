import {Component, ElementRef, HostBinding, OnInit, Renderer} from '@angular/core';
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
        if (this.bodyClass) {
          this.renderer.setElementClass(this.el.nativeElement, this.bodyClass, false);
        }
        this.updateBodyClass();
        this.renderer.setElementClass(this.el.nativeElement, this.bodyClass, true);
      }
    });
  }

  bodyClass = "";
  updateBodyClass() {
    this.bodyClass = this.router.routerState.snapshot.root.firstChild.data["bodyClass"];
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
