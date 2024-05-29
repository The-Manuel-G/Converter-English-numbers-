import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage  {
  num: number = 0;
  tablaMultiplicar: string[] = [];

  constructor() { }

GenerarTabla() {
  this.tablaMultiplicar = [];
  for (let i = 1; i<=10; i++){
    this.tablaMultiplicar.push(`${this.num} x ${i} = ${this.num * i}`);
  }
}

}
