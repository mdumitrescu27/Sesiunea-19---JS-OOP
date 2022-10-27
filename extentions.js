class Car {
    constructor() {
        this.name = name;
    }

    present() {
        return 'I am a ' + this.name;
    }
}

class Model extends Car {
    constructor(name, brand) {
        super(name);
        this.brand = brand;
    }

    show() {
        return this.present() + ' and my type is ' + this.brand;
    }
}

const myModel = new Model("Dacia", "Logan");