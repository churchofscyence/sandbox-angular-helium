import { Component } from '@angular/core';
import {MainService} from "../../services/main.service";
import {Context} from "../../classes/context";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  constructor(public service:MainService) {
  }

  title:string = "counter.component.ts";
  context:Context = new Context(10);

  incrementCounter() {
    this.context.count++;

    this.service.sendContext(this.context);
  }

  decrementCounter() {
    this.context.count--;

    this.service.sendContext(this.context);
  }

}
