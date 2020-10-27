import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input() aviso: string;
  @Output() mensajeMarcado = new EventEmitter();

  leido = false;
  mensaje: string;

  marcar(event: any): void {
    this.leido = !this.leido;
  }

  detectar(leido): void {
    if (leido) {
      this.mensaje = this.aviso + ' marcado como completado';
    } else {
      this.mensaje = this.aviso + ' marcado como NO completado';
    }
    this.mensajeMarcado.emit(this.mensaje);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
