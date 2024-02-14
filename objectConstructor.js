function Person(name, age){
    this.name = name,
    this.age = age
    this.changeAge = function (age){
        this.age = age
    }
}

let p1 = new Person('amit', 27)

console.log(p1)

//calling method of a constructor
p1.changeAge(28)

console.log(p1)