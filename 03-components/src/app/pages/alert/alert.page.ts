import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.page.html',
    styleUrls: ['./alert.page.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AlertPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
