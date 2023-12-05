import { Component } from '@angular/core';
import {Context} from "../../classes/context";
import {MainService} from "../../services/main.service";

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent {

  context: Context = new Context(10);

  constructor(public service: MainService) {

    service.dataSourceContext.subscribe(response => {
      this.context = response;
    });

  }

}
