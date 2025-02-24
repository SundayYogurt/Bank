class BankAccount {
    private readonly accountNumber:string
    private balance:number
    protected ownerName:string

    constructor(accountNumber:string,balance:number,ownerName:string){
        this.accountNumber = accountNumber
        this.balance = balance
        this.ownerName = ownerName
    }

    public getBalance():number{
        return this.balance 
    }
    public getAccountNumber():number{
        return this.balance 
    }

    public deposit(amount: number){
        if(amount > 0){
        this.balance += amount;
        console.log(`Deposited ${amount}, new blance: ${this.balance}`)
     }else{
        console.log("Deposit faild! Amount must be a positive number.")
     }
    }

    public withdraw(amount: number){
        if(amount < this.balance){
        this.balance -= amount
        console.log(`Withdraw: ${amount}, remaining balance: ${this.balance}`)
        }else{
            console.log("Wihdraw faild!")
        }
    }

    public getOwnerName():string{
        return this.ownerName
    }

    public toString():string{
        return `[AccountNumber ${this.accountNumber}], [Balance ${this.balance}], [OwnerName ${this.ownerName}]`
    }

} 

export {BankAccount}