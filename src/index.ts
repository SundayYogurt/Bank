
const {Product} = require("./stock/Product")
const {BankAccount} = require("./BankAccount");
const {SavingAccount} = require("./SavingAccount")
const {Account} = require("./account/Account")
const {AdminAccount} = require("./account/AdminAccount")
const {DiscountedProduct} = require("./stock/DiscountProduct")
const {Car} = require("./car/Car")

const ac1 = new BankAccount("1",10,"Rkoi")
console.log(ac1.toString())
const sa1 = new SavingAccount("s1",10000,"koi",0.09)
console.log(sa1.getBalance())
console.log(sa1.applyInterestRate())


const account = new Account("Somphong","1234","Som11@gmail.com")
console.log(account.toString())

const admin = new AdminAccount("Admin","1234","Admin1@gmail.com")
console.log(admin.toString())
admin.resetPassword("5555")
console.log(admin.getPassword())

account.changePassword("1234","5678")
console.log(account.toString())

console.log("******************")

const product = new Product("P01","WD-BLACK-1TB",2490)
console.log(product.toString())

product.setPrice(2000)
console.log(product.toString())

const discount = new DiscountedProduct(product)
discount.discountAsPercentage(100)
console.log(discount.toString())

const car = new Car("Toyota",199)

console.log(car.toString())

car.accelerate(1)

car.brake(10)