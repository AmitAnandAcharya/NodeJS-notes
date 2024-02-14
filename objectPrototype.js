/**
 All JavaScript objects inherit properties and methods from a prototype
 The Object.prototype is on the top of the prototype inheritance chain
 */
function Person(name, age){
    this.name = name,
    this.age = age
    this.changeAge = function (age){
        this.age = age
    }
}

Person.prototype.type = "human"

let p =new Person('amit', 28)
console.log(p)
console.log(p.type)