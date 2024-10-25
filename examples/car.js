class Car {
    #speed;
    #minSpeed;
    #maxSpeed;
  
    constructor(make, model, minSpeed = 0, maxSpeed = 200) {
      this.make = make;
      this.model = model;
      this.#minSpeed = minSpeed;
      this.#maxSpeed = maxSpeed;
      this.#speed = 0;
    }
  
    get speed() {
      return this.#speed;
    }
  
    set speed(newSpeed) {
      if (newSpeed < this.#minSpeed) {
        console.log(`Cannot set speed below minimum speed of ${this.#minSpeed} km/h`);
        this.#speed = this.#minSpeed;
      } else if (newSpeed > this.#maxSpeed) {
        console.log(`Cannot set speed above maximum speed of ${this.#maxSpeed} km/h`);
        this.#speed = this.#maxSpeed;
      } else {
        this.#speed = newSpeed;
      }
    }
  
    accelerate(increment) {
      this.speed = this.#speed + increment;
      console.log(`${this.make} ${this.model} accelerated to ${this.#speed} km/h`);
    }
  
    brake(decrement) {
      this.speed = this.#speed - decrement;
      console.log(`${this.make} ${this.model} decelerated to ${this.#speed} km/h`);
    }
  
    status() {
      console.log(`${this.make} ${this.model} is currently traveling at ${this.#speed} km/h`);
    }
  }
  
  // Usage example
  const myCar = new Car("Toyota", "Corolla", 0, 180);
  
  console.log("Initial state:");
  myCar.status();
  
  console.log("\nAccelerating:");
  myCar.accelerate(50);
  myCar.accelerate(40);
  myCar.accelerate(100);
  
  console.log("\nBraking:");
  myCar.brake(30);
  myCar.brake(200);
  
  console.log("\nTrying to set speed directly:");
  myCar.speed = 220;
  myCar.status();
  
  myCar.speed = -10;
  myCar.status();
  
  console.log("\nFinal acceleration:");
  myCar.accelerate(100);
  myCar.status();