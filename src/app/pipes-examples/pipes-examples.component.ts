import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.scss']
})
export class PipesExamplesComponent implements OnInit {

  hoy = new Date();
  ciudad = 'Milan';
  sentenceUppercase = 'SENTENCE UPPERCASE';

  constructor() { }

  ngOnInit(): void {
  }

}
