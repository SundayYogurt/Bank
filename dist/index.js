"use strict";
const { BankAccount } = require("./BankAccount");
const { SavingAccount } = require("./SavingAccount");
const ac1 = new BankAccount("1", 10, "Rkoi");
console.log(ac1.toString());
const sa1 = new SavingAccount("s1", 10000, "koi", 0.09);
console.log(sa1.getBalance());
console.log(sa1.applyInterestRate());
