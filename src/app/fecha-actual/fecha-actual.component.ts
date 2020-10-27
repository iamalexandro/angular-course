import { Component } from '@angular/core';


@Component ({
  selector: 'app-fecha-actual',
  template: `
    <!-- <p>Colombia, {{ hoy | date: 'd/M/y H:m'}} </p> -->
    <!-- PIPE DATE EXAMPLE -->
    <p>Colombia, {{ hoy | date: 'd-M-y'}} a las {{ hoy | date: 'H:m Z' }} </p>
    <app-copyright></app-copyright>
  `,
  styleUrls: ['./fecha-actual.component.scss']
})

export class FechaActualComponent {
  hoy = new Date();
}
