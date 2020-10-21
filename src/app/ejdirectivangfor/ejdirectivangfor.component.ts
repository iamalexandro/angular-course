import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangfor',
  templateUrl: './ejdirectivangfor.component.html',
  styleUrls: ['./ejdirectivangfor.component.scss']
})
export class EjdirectivangforComponent implements OnInit {

  cursos: string[];

  constructor() {
    this.cursos = ['Angular', 'TypeScript', 'React', 'Electron'];
  }

  ngOnInit(): void {
  }

}
