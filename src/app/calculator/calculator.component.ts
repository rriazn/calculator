import { Component, output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  input1 : number = 0;
  input2 : number = 0;
  out : number | string = '';

  calculate(operation: string) {
    switch(operation) {
      case '+':
        this.out = this.input1 + this.input2;
        break;
      case '-':
        this.out = this.input1 - this.input2;
        break;
      case '*':
        this.out = this.input1 * this.input2;
        break;
      case '/':
        this.out = this.input1 / this.input2;
        break;
      case 'sin':
        this.out = Math.sin(this.input1);
        break;
      case 'cos':
        this.out = Math.cos(this.input1);
        break;
      case '^':
        this.out = Math.pow(this.input1, this.input2);
        break;
      case 'sqrt':
        this.out = Math.sqrt(this.input1);
        break;
      default:
        console.log("wrong operator");
    }
  }

  reset() {
    this.input1 = 0;
    this.input2 = 0;
    this.out = '';
  }
  
}
