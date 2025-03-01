export class Car {
    private readonly brand: string 
    private speed: number

    constructor(brand: string, speed:number){
        this.brand = brand
        this.speed = speed
    }

    public accelerate(amount:number):void{
        const newSpeed = this.speed + amount
        const maxSpeed = 200;

        if(newSpeed > maxSpeed){
            console.log(`เร่งเครื่องมากกว่านี้ไม่ได้แล้ว รถเร่งความเร็วสูงสุดที่ ${maxSpeed} km/h `)
        }else {
            this.speed = newSpeed;
            console.log(`เร่งความเร็วขึ้น ${amount} km/h ตอนนี้อยู่ที่ ${this.speed} km/h`);
        }
    }

    public brake(amount:number){
        if(this.speed <= 0){
            console.log(`ตอนนี้ความเร็วเป็น ${this.speed} km/h จึงเบรคไม่ได้` )
        }else{
            this.speed = Math.max(0, this.speed - amount)
            console.log(`ลดความเร็วลง ${amount} km/h แล้ว`)
        }
    }

    public toString():string{
        return `รถ ${this.brand} ความเร็ว ${this.speed} km/h`
    }
}