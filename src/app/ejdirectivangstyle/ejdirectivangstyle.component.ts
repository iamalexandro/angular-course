import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangstyle',
  templateUrl: './ejdirectivangstyle.component.html',
  styleUrls: ['./ejdirectivangstyle.component.scss']
})
export class EjdirectivangstyleComponent implements OnInit {

  puntuacion: number;

  constructor() { }

  ngOnInit(): void {
  }

  setColor(): string {
    return this.puntuacion >= 5 ? 'green' : 'red';
  }

}
