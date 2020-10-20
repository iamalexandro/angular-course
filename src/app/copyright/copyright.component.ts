import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {

  copyright = '© NDC Studios';
  hoy: any = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
