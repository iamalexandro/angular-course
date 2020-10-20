import { Component } from '@angular/core';

@Component ({
  selector: 'app-fecha-actual',
  template: `
    <p>Colombia, {{ hoy | date: 'd/M/y H:m'}} </p>
    <app-copyright></app-copyright>
  `,
  styleUrls: ['./fecha-actual.component.scss']
})

export class FechaActualComponent {
  hoy = new Date();
}
