/*
 >>Closure is the ability of an inner function 
 to access variables and parameters of its outer function, 
 even after the outer function has finished executing. 
 >> a closure "closes" over the environment in which it was created, 
 preserving the state of its surrounding scope.
 >>Closures are used to create functions with private data or encapsulated behavior.
*/
function outer(){
    let counter=0;
    function inner(){
        counter++
        console.log(counter)
    }
    return inner
}

let c = outer()
c()
c()
c()