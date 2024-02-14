let person = {
    'age': 10,
    'name': 'amit',
    language: 'kannada'
}

//adding properties
person.num = 5
person['company'] = 'abc'

//accessing properties
console.log("person:",person)
console.log("using [' ']:",person['age'])
console.log("using obj.prop:",person.name)

//using for..in
console.log("using for..in:")
for (let i in person) {
    console.log(i) //key
    console.log(person[i]) //value
}

//deleting properties
delete person.language
console.log("after deleting:")
console.log(person)

//from object
let key = Object.keys(person)
console.log("object.keys:",key)
let val = Object.values(person)
console.log("object.values:",val)

//stringify
let str = JSON.stringify(person)
console.log("JSON.stringify:", str)