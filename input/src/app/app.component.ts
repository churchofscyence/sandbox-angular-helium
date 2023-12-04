import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app.component.js';
  tag = '<app-counter  [count]="initial_value" ></app-counter>';

  initial_value: number = 10;

}
