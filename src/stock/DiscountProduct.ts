import { Product } from "./Product";

export class DiscountedProduct {
    private product: Product;

    constructor(product: Product) {
        this.product = product;
    }

    public discountAsPercentage(discount: number): void {
        if (discount < 0 || discount > 100) {
            console.log("ส่วนลดต้องอยู่ในช่วง 0-100%");
            return;
        }

        const oldPrice = this.product.getPrice();
        const newPrice = parseFloat((oldPrice * (100 - discount) / 100).toFixed(2)); 
        this.product.setPrice(newPrice);

        console.log(`ใช้ส่วนลด ${discount}% | ราคาเดิม: ${oldPrice} → ราคาหลังหักส่วนลด: ${newPrice}`);
    }

    public toString(): string {
        return `DiscountedProduct = [${this.product.toString()}]`;
    }
}
