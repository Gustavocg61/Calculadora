import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraSrv {
 
    soma(a: number, b: number): number {
        return a + b;
    }

    divide(a: number, b: number): number {
        return a / b;
    }

    multiplica(a: number, b: number): number {
        return a * b;
    }

    subtrai(a: number, b: number): number {
        return a - b;
    }
}
