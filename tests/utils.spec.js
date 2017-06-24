import { colour, promisify } from '../src/utils.js';

test('color generator', () => {
  expect(colour).toBeDefined();
  expect(colour(0)).toBe(2062260);
  expect(colour(1)).toBe(11454440);
});

test('promisify', () => {
  function isPromise (obj) {
    return !!obj &&
      (typeof obj === 'object' || typeof obj === 'function') &&
      typeof obj.then === 'function';
  }
  const d = {
    f: () => {}
  };
  expect(promisify).toBeDefined();
  expect(promisify(d, d.f)).toBeTruthy();
});