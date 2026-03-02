import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraSrv {
  soma(a: number, b: number): number {
    return a + b;
  }
  subtrai(a: number, b: number): number {
    return a - b;
  } 
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Divisão por zero não é permitida.');
    }   
    return a / b;
  }
  multiplica(a: number, b: number): number {
    return a * b;
  } 
  
}
