import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app.component.js';

  html_tag = '<app-counter (change)="countChange($event)"></app-counter>';

  finial_value:number = 0;

  countChange($event:any){

    this.finial_value = $event;

  }
}
