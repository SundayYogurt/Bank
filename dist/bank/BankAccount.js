"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(accountNumber, balance, ownerName) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.ownerName = ownerName;
    }
    getBalance() {
        return this.balance;
    }
    getAccountNumber() {
        return this.balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}, new blance: ${this.balance}`);
        }
        else {
            console.log("Deposit faild! Amount must be a positive number.");
        }
    }
    withdraw(amount) {
        if (amount < this.balance) {
            this.balance -= amount;
            console.log(`Withdraw: ${amount}, remaining balance: ${this.balance}`);
        }
        else {
            console.log("Wihdraw faild!");
        }
    }
    getOwnerName() {
        return this.ownerName;
    }
    toString() {
        return `[AccountNumber ${this.accountNumber}], [Balance ${this.balance}], [OwnerName ${this.ownerName}]`;
    }
}
exports.BankAccount = BankAccount;
