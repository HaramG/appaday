import { Component, Inject, trigger, style, animate, transition, state } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { SharedService } from './shared.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('display', [
      state('show', style({
        'border-style': 'solid',
        'border-color': 'aliceblue',
        'border-width': '2px',
        'background-color': 'white',
        'text-align': 'center'
      })),
      state('hide', style({
        'width': '0px',
        'height': '0px',
        'opacity': '0'
      })),
      transition('show => hide', animate('444ms ease-in-out')),
      transition('hide => show', animate('444ms ease-in-out'))
    ]),
    trigger('scroll', [
      state('left', style({
        transform: 'translate(100%, left)'
      })),
      state('normal', style({
        transform: 'scale(1)'
      })),
      transition('left => normal', animate('444ms bounce')),
      transition('normal => left', animate('444ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  constructor(shared: SharedService){
    this.shared = shared
  }
  firebase:any;
  shared: any;

}
