import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input()
  count: number = 0;

  incrementCounter() {
    this.count++;
  }

  decrementCounter() {
    this.count--;
  }

}
