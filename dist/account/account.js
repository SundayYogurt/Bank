"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(username, password, email) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    changePassword(oldPassword, newPassword) {
        if (this.password === oldPassword) {
            this.password = newPassword;
            console.log('เปลี่ยนรหัสผ่านเรียบร้อยแล้ว');
        }
        else {
            console.log('รหัสผ่านซ้ำกับอันเดิม');
        }
    }
    toString() {
        return `User: ${this.username} Password: ${this.password} Email: ${this.email}`;
    }
}
exports.Account = Account;
