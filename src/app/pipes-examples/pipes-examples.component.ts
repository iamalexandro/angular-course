import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.scss']
})
export class PipesExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hoy = new Date();
  ciudad: string = 'MiLaN';
  resultado: number = 1.148;
  pesodolar: number = 0.29;
  pesoeuro: number = 0.24;

  nombre: string = 'Laura';
  sexo: string = 'mujer';
  encabezamiento: any = {
    'hombre': 'Estimado',
    'mujer': 'Estimada'
  };
}
