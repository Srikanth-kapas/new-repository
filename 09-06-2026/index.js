//5. Abstraction

class Car {
    start() {
        this.#engineStart();
        console.log("Car Started");
    }

    #engineStart() {
        console.log("Engine Starting...");
    }
}

const car = new Car();
car.start();



// 6. Inheritance

class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`I am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }
}

const student = new Student("Srikanth", "JavaScript");

student.introduce();



// 7. Polymorphism

class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.sound();
cat.sound();



// 8. Class Declaration

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`${this.name} - ₹${this.price}`);
    }
}

const product1 = new Product("Laptop", 50000);

product1.display();