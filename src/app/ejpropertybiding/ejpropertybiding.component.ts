import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejpropertybiding',
  templateUrl: './ejpropertybiding.component.html',
  styleUrls: ['./ejpropertybiding.component.scss']
})
export class EjpropertybidingComponent implements OnInit {

  texto = 'Escribe algo...';

  constructor() {
    setTimeout(() => {
      this.texto = 'Por favor';
    }, 5000);

    setTimeout(() => {
      this.texto = 'Pero rapido';
    }, 8000);
  }

  ngOnInit(): void {
  }

}
