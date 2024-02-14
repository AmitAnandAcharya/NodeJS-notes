/* 
The call() method takes arguments separately.
The apply() method takes arguments as an array.
The apply() method is very handy if you want to use an array instead of an argument list.
*/

const person = {
    msg: "welcome!",
    fullname: function (s1, s2) {
        console.log(s1 + " " + s2 + " " + this.fname + " " + this.lname + ", " + person.msg)
    }
}

const person1 = {
    fname: "Lata",
    lname: "Acharya"
}

person.fullname.apply(person1, ["Hello", "Mrs."])

