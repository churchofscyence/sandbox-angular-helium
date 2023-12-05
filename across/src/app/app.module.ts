import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { RightComponent } from './components/right/right.component';
import { LeftComponent } from './components/left/left.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    RightComponent,
    LeftComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
