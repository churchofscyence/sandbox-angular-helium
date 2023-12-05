import { Component } from '@angular/core';
import {MainService} from "../../services/main.service";
import {Context} from "../../classes/context";

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent {

  context:Context = new Context(10);

 constructor(public service:MainService) {

   service.dataSourceContext.subscribe(response => {
     this.context = response;
   });

 }

}
