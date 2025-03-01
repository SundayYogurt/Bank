export class Account{
    private readonly username:string
    private password:string
    protected email:string

    constructor(username:string,password:string,email:string){
        this.username = username
        this.email = email
        this.password = password
    }

    public getPassword():string{
        return this.password
    }

    public setPassword(password:string):void{
        this.password = password
    }

    public changePassword(oldPassword:string,newPassword:string):void{
        if(this.password === oldPassword){
            this.password = newPassword
            console.log('เปลี่ยนรหัสผ่านเรียบร้อยแล้ว')
        }else{
            console.log('รหัสผ่านซ้ำกับอันเดิม')
        }
    }
    public toString():string{
            return `User: ${this.username} Password: ${this.password} Email: ${this.email}`
        }
}

