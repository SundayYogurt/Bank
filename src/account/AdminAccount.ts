import { Account } from "./Account";

export class AdminAccount extends Account{
    constructor(username:string,password:string,email:string){
        super(username,password,email)
    }
    public resetPassword(newPassword:string):void{
        if(typeof newPassword === "string"){
            this.setPassword(newPassword)
        }else{
            console.log("รหัสผ่านต้องเป็น string")
        }
        
    }

    public toString():string{
        return `Admin ${super.toString()}`
    }
}