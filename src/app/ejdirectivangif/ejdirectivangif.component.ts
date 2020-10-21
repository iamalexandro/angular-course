import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangif',
  templateUrl: './ejdirectivangif.component.html',
  styleUrls: ['./ejdirectivangif.component.scss']
})
export class EjdirectivangifComponent implements OnInit {

  // nombre: string;
  capital: string;
  equipo: string;

  constructor() { }

  ngOnInit(): void {
  }

  setResultado(): boolean {
    return this.capital === 'paris' ? true : false;
  }

  setEquipo(): boolean {
    return this.equipo === 'milan' ? true : false;
  }

}
