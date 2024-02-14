/*
With the bind() method, an object can borrow a method from another object.
Basically we are creating a copy of a method
*/
const person = {
    msg: "welcome!",
    fullname: function (s1, s2) {
        console.log(s1 + " " + s2 + " " + this.fname + " " + this.lname + ", " + person.msg)
    }
}

const person1 = {
    fname: "Arpita",
    lname: "Acharya"
}

let p = person.fullname.bind(person1)//, "Hello", "Mrs") -> adding params wont work
console.log(p) //[Function: bound fullname]

p("Hello", "Mrs")