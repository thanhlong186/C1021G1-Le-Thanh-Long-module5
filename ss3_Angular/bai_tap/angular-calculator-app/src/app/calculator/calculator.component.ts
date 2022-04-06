import { Component, OnInit } from '@angular/core';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result: number;

  constructor() { }

  ngOnInit(): void {
  }


  // opertion(num1: number, num2: number, operator: string){
  //
  //   switch (operator) {
  //     case '+':
  //       this.result = num1 + num2;
  //       break;
  //     case '-':
  //       this.result = num1 - num2;
  //       break;
  //     case '*':
  //       this.result = num1 * num2;
  //       break;
  //     case '/':
  //       this.result = num1 / num2;
  //       break;
  //   }
  // }
  opertion(value: string, value2: string, value3: string) {

      switch (value3) {
        case '+':
          this.result = Number(value) + Number(value2);
          break;
        case '-':
          this.result = Number(value) - Number(value2);
          break;
        case '*':
          this.result = Number(value) * Number(value2);
          break;
        case '/':
          this.result = Number(value) / Number(value2);
          break;
      }

  }
}
