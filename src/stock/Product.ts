export class Product {
    private readonly id: string
    protected name: string
    private price: number

    constructor(id: string, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }

    public getPrice(): number {
        return this.price
    }

    public setPrice(newPrice: number): void {
        if (typeof newPrice === "number") {
            if (newPrice >= 0) {
                this.price = newPrice
                console.log(`เปลี่ยนราคาเป็น ${this.price}เรียบร้อยแล้ว`)
            } else {
                console.log("ห้ามราคาต่ำกว่า 0")
            }
        } else {
            console.log("ใส่ได้เฉพาะตัวเลข")
        }
    }
    public toString():string{
        return `ID: ${this.id} Name: ${this.name} Price: ${this.price}`
    }
}