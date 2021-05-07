class Vehicle {
    constructor(name, wheel) {
        this.name = name
        this.wheel = wheel
    }
}
const myVehicle = new Vehicle('운송수단', 2)

class Bicycle extends Vehicle {
    constructor(name, wheel) {
        super(name, wheel)
    }
}
const myBicycle = new Bicycle('삼천리', 2)
const dauthersBicycle = new Bicycle('세발', 3)

console.log(myBicycle)
console.log(dauthersBicycle)

class Car extends Vehicle {
    constructor(name, wheel, license) {
        super(name, wheel)
        this.license = license
    }
}

const myCar = new Car('벤츠', 4, true)
const dauthersCar = new Car('포르쉐', 4, false)

console.log(myCar)
console.log(dauthersCar)