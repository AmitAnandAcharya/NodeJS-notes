let s1 = Symbol()
let s2 = Symbol()
let a = {}


a[s1] = 1
a[s2] = 2

console.log(a)
console.log(a[s1])
console.log(s1)