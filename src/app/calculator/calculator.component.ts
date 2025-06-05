import { Component, output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  input1 : number | string = '';
  input2 : number | string = '';
  output : number | string = '';

  calculate(operation: string) {
    console.log(this.input1);
  }
  
}
