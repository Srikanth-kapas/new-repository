/ Parent Class
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

// Child Class
class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

// Grandchild Class (Multi-level Inheritance)
class Puppy extends Dog {
    play() {
        console.log("Puppy is playing");
    }
}

// Creating Object
const puppy = new Puppy();

// Multi-level InheritanceTTTTTTTTTTTTTTTTTTTTTTTTTTT
puppy.eat();   // From Animal
puppy.bark();  // From Dog
puppy.play();  // From Puppy