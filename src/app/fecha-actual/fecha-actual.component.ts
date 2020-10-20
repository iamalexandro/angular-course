import { Component } from '@angular/core';

@Component ({
  selector: 'app-fecha-actual',
  templateUrl: './fecha-actual.component.html',
  styleUrls: ['./fecha-actual.component.scss']
})

export class FechaActualComponent {
  hoy = new Date();
}
