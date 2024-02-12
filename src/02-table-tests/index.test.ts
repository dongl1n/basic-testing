// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 12, b: 2, action: Action.Subtract, expected: 10 },
  { a: 27, b: 21, action: Action.Subtract, expected: 6 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 4, b: 3, action: Action.Multiply, expected: 12 },
  { a: 9, b: 9, action: Action.Multiply, expected: 81 },
  { a: 2, b: 2, action: Action.Divide, expected: 1 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 18, b: 9, action: Action.Divide, expected: 2 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 10, b: 2, action: Action.Exponentiate, expected: 100 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 2, b: 2, action: '%', expected: null },
  { a: 10, b: 2, action: 'hello', expected: null },
  { a: 10, b: 2, action: '^_______^', expected: null },
  { a: 'test', b: 2, action: Action.Exponentiate, expected: null },
  { a: 'test', b: 'err', action: Action.Exponentiate, expected: null },
  { a: true, b: 1, action: Action.Exponentiate, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)('.add($a, $b)', ({ a, b, action, expected }) => {
    expect(simpleCalculator({ a: a, b: b, action: action })).toBe(expected);
  });
});
