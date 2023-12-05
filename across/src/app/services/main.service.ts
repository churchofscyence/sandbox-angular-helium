import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

import {Context} from "../classes/context";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  private _context = new Context(10);

  private _dataSourceContext  =  new BehaviorSubject<Context>(this._context);
  _dataContext : Observable<Context> = this._dataSourceContext.asObservable();

  sendContext(dataContext: Context) {
    this._dataSourceContext.next(dataContext);
  }

  receiveContext(){
    this._dataSourceContext.subscribe(response => {
      this._context = response;
    });
    return this._context;
  };

  get dataSourceContext(): BehaviorSubject<Context> {return this._dataSourceContext;}
  set dataSourceContext(value: BehaviorSubject<Context>) {this._dataSourceContext = value;}
}
