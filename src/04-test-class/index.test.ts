// Uncomment the code below and write your tests
import lodash from 'lodash';
import {
  getBankAccount,
  BankAccount,
  InsufficientFundsError,
  TransferFailedError,
} from './index';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const initialBalance = 12345;
    expect(getBankAccount(initialBalance)).toStrictEqual(
      new BankAccount(initialBalance),
    );
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const account = new BankAccount(150);
    const amount = 500;
    function draw() {
      account.withdraw(amount);
    }
    expect(draw).toThrow(new InsufficientFundsError(account.getBalance()));
  });

  test('should throw error when transferring more than balance', () => {
    const account = new BankAccount(105);
    const account2 = new BankAccount(10);
    const amount = 500;
    function transfer() {
      account.transfer(amount, account2);
    }
    expect(transfer).toThrow(new InsufficientFundsError(account.getBalance()));
  });

  test('should throw error when transferring to the same account', () => {
    const account = new BankAccount(105);
    const amount = 500;
    function transfer() {
      account.transfer(amount, account);
    }
    expect(transfer).toThrow(new TransferFailedError());
  });

  test('should deposit money', () => {
    const account = new BankAccount(1050);
    const amount = 500;
    const balance = account.getBalance();
    expect(account.deposit(amount).getBalance()).toBe(balance + amount);
  });

  test('should withdraw money', () => {
    const account = new BankAccount(1050);
    const amount = 500;
    const balance = account.getBalance();
    expect(account.withdraw(amount).getBalance()).toBe(balance - amount);
  });

  test('should transfer money', () => {
    const account = new BankAccount(1000);
    const account2 = new BankAccount(10);
    const amount = 500;
    const balance = account.getBalance();
    expect(account.transfer(amount, account2).getBalance()).toBe(
      balance - amount,
    );
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    jest.unmock('lodash');
    lodash.random = jest.fn(() => 555);
    const account = new BankAccount(1000);
    expect(account.fetchBalance()).resolves.toBe(555);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    jest.unmock('lodash');
    lodash.random = jest.fn(() => 0);
    const account = new BankAccount(1000);
    expect(account.fetchBalance()).resolves.toBe(null);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
