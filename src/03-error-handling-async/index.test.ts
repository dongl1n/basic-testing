// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    await expect(resolveValue(5)).resolves.toBe(5);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const msg = 'Meow';
    function throwErr() {
      throwError(msg);
    }
    expect(throwErr).toThrow(new Error(msg));
  });

  test('should throw error with default message if message is not provided', () => {
    function throwErr() {
      throwError();
    }
    expect(throwErr).toThrow(new Error('Oops!'));
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    function throwErr() {
      throwCustomError();
    }
    expect(throwErr).toThrow(new MyAwesomeError());
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    return expect(rejectCustomError()).rejects.toThrow(new MyAwesomeError());
  });
});
