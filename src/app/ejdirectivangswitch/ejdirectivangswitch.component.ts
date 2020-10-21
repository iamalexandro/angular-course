import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangswitch',
  templateUrl: './ejdirectivangswitch.component.html',
  styleUrls: ['./ejdirectivangswitch.component.scss']
})
export class EjdirectivangswitchComponent implements OnInit {

  jugadores: any [] = [
    { nombre: 'Zlatan Ibrahimivic', equipo: 'AC MILAN'},
    { nombre: 'Lionel Messi', equipo: 'Barcelona'},
    { nombre: 'Hakan Calhanoglu', equipo: 'AC MILAN'},
    { nombre: 'Cristiano Ronaldo', equipo: 'Real Madrid'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
