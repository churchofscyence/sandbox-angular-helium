import { Component, EventEmitter, Output, OnInit }  from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit  {

  title:string = 'counter.component.ts';

  count:number = 10;

  ngOnInit(): void {
    this.change.emit(this.count);
  }

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  incrementCounter() {
    this.count++;
    this.change.emit(this.count);
  }

  decrementCounter() {
    this.count--;
    this.change.emit(this.count);
  }

}
