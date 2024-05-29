import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traductor-number',
  templateUrl: './traductor-number.page.html',
  styleUrls: ['./traductor-number.page.scss'],
})
export class TraductorNumberPage  {
  num: number = 0;
  numberInWords: string = '';

  constructor() { }

  translate() {
    if(this.num >= 1 && this.num <= 1000){
      this.numberInWords = numberToWords(this.num);

    }
   else {
    this.numberInWords = 'Please enter a number between 1 and 1000'
  }
  }
}

//Function to convert number to words
function numberToWords(num: number): string {
const units =['Zero','one','two','three','four','five','six','seven','eight','nine'];
const teens=['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const tens =[ '','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
const thousands = ['thousand'];
 
 if (num === 1000) {
 return 'one thousand'
 }


 let result = '';

 if (num >= 100)
{
  const hundred = Math.floor(num / 100);
  result += units[hundred] + 'hundred';
  num = num % 100;
}

if (num >= 20){
  const ten  = Math.floor(num / 10);
  result += tens[ten] + ' ';
  num = num % 10;
}


if (num > 10 && num < 20 ){
  result += teens[num - 11] + ' ';
  num = 0;
}


if (num > 0 && num <= 10 ){
  result += units[num] + '  ';
}

return result.trim();
 }