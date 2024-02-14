/**It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes */

const person = {
    "name": "pooja",
    "dob": "1996",
    "sex": "",
    get age(){
        return (2023 - this.dob)
    },
    set gender(sex){
        this.sex = sex
    },
    info: function (){
        console.log(this.name + ' is ' + this.age)
    }
}
//calling getter without ()
console.log(person.age)

//calling method with ()
person.info()

//using setter
person.gender = "female"

//calling the property
console.log(person.sex)