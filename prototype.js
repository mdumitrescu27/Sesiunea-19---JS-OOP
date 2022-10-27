function Car(name, brand) {
    this.name = name;
    this.brand = brand;
};

Car.prototype.sayHello = function() {
    console.log('Hello');
}

const car = new Car('Ford', 'Mustang');

car.getDescription = function() {
    return `I am a ${this.name} type ${this.brand}`;
}

console.log(car);

const car2 = new Car('Dacia', 'Logan');
console.log(car2);

car.sayHello();


Car.prototype.changeModel = function(newModel) {
    this.brand = newModel;
}
car.changeModel('Focus');
console.log(car);



Array.prototype.getFirst = function(){
    return this[0];
}

const animals = ['oaie', 'capra'];

console.log(animals.getFirst());