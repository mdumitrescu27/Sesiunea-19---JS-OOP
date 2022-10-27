function Student(name, age, grade) {
    this.sayHello = function() {
        console.log("Say Hello");
    };
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.average = function() {return this.grade / 2}
};

const student1 = new Student('Miki', 24, 8);
console.log(student1);

const student2 = new Student('Jhon', 30, 9);
console.log(student2);