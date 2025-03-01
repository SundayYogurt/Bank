"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountedProduct = void 0;
class DiscountedProduct {
    constructor(product) {
        this.product = product;
    }
    discountAsPercentage(discount) {
        if (discount < 0 || discount > 100) {
            console.log("ส่วนลดต้องอยู่ในช่วง 0-100%");
            return;
        }
        const oldPrice = this.product.getPrice();
        const newPrice = parseFloat((oldPrice * (100 - discount) / 100).toFixed(2));
        this.product.setPrice(newPrice);
        console.log(`ใช้ส่วนลด ${discount}% | ราคาเดิม: ${oldPrice} → ราคาหลังหักส่วนลด: ${newPrice}`);
    }
    toString() {
        return `DiscountedProduct = [${this.product.toString()}]`;
    }
}
exports.DiscountedProduct = DiscountedProduct;
