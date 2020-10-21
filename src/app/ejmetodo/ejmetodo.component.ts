import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejmetodo',
  templateUrl: './ejmetodo.component.html',
  styleUrls: ['./ejmetodo.component.scss']
})
export class EjmetodoComponent implements OnInit {

  puntuacion = 9;

  constructor() { }

  ngOnInit(): void {
  }

  getPuntuacion(): number{
    return this.puntuacion;
  }

}
