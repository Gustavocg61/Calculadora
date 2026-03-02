import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('calculadora');
calculadoraSrv: any;
num1: any;
num2: any;
num3: any;
num4: any;
num5: any;
num6: any;
num7: any;
num8: any;
}
