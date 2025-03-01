"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    setPrice(newPrice) {
        if (typeof newPrice === "number") {
            if (newPrice >= 0) {
                this.price = newPrice;
                console.log(`เปลี่ยนราคาเป็น ${this.price}เรียบร้อยแล้ว`);
            }
            else {
                console.log("ห้ามราคาต่ำกว่า 0");
            }
        }
        else {
            console.log("ใส่ได้เฉพาะตัวเลข");
        }
    }
    toString() {
        return `ID: ${this.id} Name: ${this.name} Price: ${this.price}`;
    }
}
exports.Product = Product;
