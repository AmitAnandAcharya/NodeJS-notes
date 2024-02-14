/*
Sometimes the bind() method has to be used to prevent losing this.
When a function is used as a callback, this is lost.
*/
const person = {
    fname: "Ankita",
    lname: "Acharya",
    fullname: function () {
        console.log(this.fname + " " + this.lname)
    }
}

setTimeout(person.fullname, 1000) //undefined undefined

let p1 = person.fullname.bind(person)
setTimeout(p1, 1000)


