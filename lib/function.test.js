import { describe, expect, it } from 'vitest';
import { somar } from './function';

describe('somar', () => {
  it('soma dois números positivos', () => {
    expect(somar(2, 2)).toBe(4);
  });

  it('soma um número negativo e zero', () => {
    expect(somar(-1, 1)).toBe(0);
  });
});
