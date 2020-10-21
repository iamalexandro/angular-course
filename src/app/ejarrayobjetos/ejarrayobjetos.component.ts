import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno.model';

@Component({
  selector: 'app-ejarrayobjetos',
  templateUrl: './ejarrayobjetos.component.html',
  styleUrls: ['./ejarrayobjetos.component.scss']
})
export class EjarrayobjetosComponent implements OnInit {

  public alumnos: Array<Alumno> = [
    {id: 1, nombre: 'Jose', apellidos: 'Rodriguez', ciudad: 'Amsterdam'},
    {id: 2, nombre: 'Maria', apellidos: 'Benites', ciudad: 'Bogota'},
    {id: 2, nombre: 'Mario', apellidos: 'Gomez', ciudad: 'Santiago'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
