/*call() can be used to invoke (call) a method with an owner object as an argument (parameter).
With the apply() method, you can write a method that can be used on different objects
*/
const person = {
    msg: "welcome",
    fullname: function (string) {
        return string + " " + this.fname + " " + this.lname + ", " + person.msg
    }
}

const person1 = {
    fname: "Anand",
    lname: "Acharya"
}

let p1 = person.fullname.call(person1, "hello")
console.log(p1)
