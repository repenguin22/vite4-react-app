import { describe, expect, it } from 'vitest';
import { testFunc } from '../math';

describe('Simple working test', () => {
  it('correct', () => {
    expect(testFunc(2, 3)).toBe(5);
  });
});
