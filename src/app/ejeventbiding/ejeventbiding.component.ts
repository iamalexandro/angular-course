import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbiding',
  templateUrl: './ejeventbiding.component.html',
  styleUrls: ['./ejeventbiding.component.scss']
})
export class EjeventbidingComponent implements OnInit {

  texto = 'texto inicial';

  constructor() { }

  ngOnInit(): void {
  }

  modTexto(): void {
    this.texto = 'texto modificado';
  }

}
