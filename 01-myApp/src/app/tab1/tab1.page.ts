import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("NgOnInit - ON");

    let number = 10;
    debugger;
    number += 10;
    number *=2;
    number -=10;
    console.log("Number: " + number);

    console.log({number});
  }

}
