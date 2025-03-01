import { BankAccount } from "./BankAccount"
class SavingAccount extends BankAccount {
    private interestRate:number

    constructor(accountNumber:string,balance:number,ownerName:string,interestRate:number){
        super (accountNumber,balance,ownerName)
        this.interestRate = interestRate
    }

    public getInterestRate():number{
    return this.interestRate
    }


    public applyInterestRate():void{
        const interest = this.getBalance() * this.interestRate
       this.deposit(interest);
       console.log(`applied interest:${this.interestRate},
         new balance: ${this.getBalance()}`)
    }


}

export {SavingAccount}