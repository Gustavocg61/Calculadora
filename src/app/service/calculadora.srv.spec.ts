import { TestBed } from '@angular/core/testing';

import { CalculadoraSrv } from './calculadora.srv';

describe('CalculadoraSrv', () => {
  let service: CalculadoraSrv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraSrv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
