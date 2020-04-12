import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: '<h1>{{pageTitle}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}