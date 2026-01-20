import { Myservice } from './../myservice';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  imports: [],
  templateUrl: './new-cmp.html',
  styleUrl: './new-cmp.css',
})
export class NewCmp {
  todaydate;
  newcomponent = 'Entered in new component!'
  componentproperty;
  constructor(private myservice:Myservice) {
    this.todaydate = this.myservice.showTodayDate()
    this.myservice.serviceproperty = 'Component Created';
    this.componentproperty = this.myservice.serviceproperty;
  }
}
