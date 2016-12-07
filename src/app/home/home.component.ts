import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  host: {
    "[class.content-area]": "true",
    "[style.overflow-y]": "hidden"
  }
})
export class HomeComponent {

  constructor() { }

}
