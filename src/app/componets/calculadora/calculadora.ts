import { Component } from '@angular/core';
import { CalculadoraSrv } from '../../service/calculadora.srv';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss',
})
export class Calculadora {
  constructor(public calculadoraSrv: CalculadoraSrv) {}
  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  num4: number = 0;
  num5!: number ; 
  num6!: number ;
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
