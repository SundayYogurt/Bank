"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingAccount = void 0;
const BankAccount_1 = require("./BankAccount");
class SavingAccount extends BankAccount_1.BankAccount {
    constructor(accountNumber, balance, ownerName, interestRate) {
        super(accountNumber, balance, ownerName);
        this.interestRate = interestRate;
    }
    getInterestRate() {
        return this.interestRate;
    }
    applyInterestRate() {
        const interest = this.getBalance() * this.interestRate;
        this.deposit(interest);
        console.log(`applied interest:${this.interestRate},
         new balance: ${this.getBalance()}`);
    }
}
exports.SavingAccount = SavingAccount;
