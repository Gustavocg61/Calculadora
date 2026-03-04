import { Component } from '@angular/core';
import { CalculadoraSrv } from '../../service/calculadora.srv';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss',
})
export class Calculadora {
  constructor(public calculadoraSrv: CalculadoraSrv) { }
  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  num4: number = 0;
  num5: number = 0;
  num6: number = 0;
  num7: number = 0;
  num8: number = 0;

  soma(a: number, b: number): number {
    return this.calculadoraSrv.soma(a, b);
  }
  subtrai(a: number, b: number): number {
    return this.calculadoraSrv.subtrai(a, b);
  }
  divide(a: number, b: number): number {
    return this.calculadoraSrv.divide(a, b);
  }
  multiplica(a: number, b: number): number {
    return this.calculadoraSrv.multiplica(a, b);
  }
}
