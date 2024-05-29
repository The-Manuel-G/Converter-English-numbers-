import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage  {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  constructor() {}

  sumar() {
    this.resultado = this.num1 + this.num2;
  }
 


}

