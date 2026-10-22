// Parent Class
class Person {
    constructor(name, age) { // Constructor Method
        this.name = name;
        this.age = age;
    }

    // Getter
    get personName() {
        return this.name;
    }

    // Setter
    set personName(newName) {
        this.name = newName;
    }

    // Method to be overridden
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    // Static Method
    static company() {
        console.log("Welcome to JavaScript OOP");
    }
}

// Child Class
class Employee extends Person {
    constructor(name, age, role) {
        super(name, age); // Calling Parent Constructor
        this.role = role;
    }

    // Method Overriding
    displayInfo() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Role: ${this.role}`
        );
    }
}

// Static Method
Person.company();

// Creating Object of Child Class
const emp1 = new Employee("Srikanth", 25, "Frontend Developer");

// Getter
console.log("Getter:", emp1.personName);

// Setter
emp1.personName = "Kiran";
console.log("Updated Name:", emp1.personName);

// Overridden Method
emp1.displayInfo();