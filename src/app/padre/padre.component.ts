import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {

  valorPadre = 'Este texto se inyecta desde el padre';

  avisos: string[] = ['Aviso 1', 'Aviso 2', 'Aviso 3'];
  texto: string;

  mostrarMensaje(event): void {
    this.texto = event + ' marcado como finalizado';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
