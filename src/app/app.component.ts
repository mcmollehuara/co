import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: "app.component.html",
  styles: [require('./../assets/scss/application.scss')]
})
export class AppComponent implements OnInit {
  constructor(public appState: AppState) {
  }
  ngOnInit() {
    console.log('Initial App State', this.appState.state);
    
  }
}
