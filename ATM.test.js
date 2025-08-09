// Import the class you want to test
const { ATM } = require('./ATM.js');

// A test suite is a collection of related tests, often grouped by a feature or class.
describe('ATM Class', () => {

  // Use the 'beforeEach' hook to run code before every test.
  // This is crucial for resetting state and ensuring test isolation.
  beforeEach(() => {
    // Re-initialize the static balance to a known value before each test.
    // We create a new ATM instance to trigger the constructor and reset the static #saldo.
    new ATM(0);
  });

  it('should initialize with a starting balance of 0', () => {
    // 1. Arrange: The balance is already 0 from the beforeEach hook.
    // 2. Act: Get the current balance.
    const saldo = ATM.lihatSaldo();

    // 3. Assert: The balance should be 0.
    expect(saldo).toBe(0);
  });

  it('should be able to deposit money', () => {
    // Arrange: The balance is currently 0 from the beforeEach hook.
    const initialBalance = ATM.lihatSaldo();
    const depositAmount = 50;

    // Act: Deposit money.
    ATM.setorUang(depositAmount);
    const newBalance = ATM.lihatSaldo();

    // Assert: Check the new balance.
    expect(newBalance).toBe(initialBalance + depositAmount);
  });

  it('should throw an error when depositing a negative amount', () => {
    // Assert: Use 'toThrow' to check if an error is thrown.
    expect(() => ATM.setorUang(-10)).toThrow('Jumlah harus lebih besar dari 0');
  });

  it('should be able to withdraw money', () => {
    // Arrange: Start with a balance of 100 for this specific test.
    ATM.setorUang(100);
    const initialBalance = ATM.lihatSaldo(); // should be 100
    const withdrawAmount = 25;

    // Act: Withdraw money using the instance method.
    // We don't need to create a new instance here since the static balance is already set.
    ATM.tarikUang(withdrawAmount);
    const newBalance = ATM.lihatSaldo();

    // Assert: Check the new balance.
    expect(newBalance).toBe(initialBalance - withdrawAmount);
  });

  it('should throw an error when withdrawing more than the balance', () => {
    // Arrange: Start with a balance of 100 for this specific test.
    ATM.setorUang(100);
    const withdrawAmount = 150;

    // Assert: Use 'toThrow' to check for the correct error message.
    expect(() => ATM.tarikUang(withdrawAmount)).toThrow('Saldo tidak mencukupi');
  });

  it('should throw an error when withdrawing a negative amount', () => {
    // Assert: Use 'toThrow' to check for the correct error message.
    expect(() => ATM.tarikUang(-10)).toThrow('Jumlah harus lebih besar dari 0');
  });
});
