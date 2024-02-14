/*Node.js is an assurance that a task will either 
succeed and provide a result or fail and provide a reason for the failure.*/

function sum(a, b){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(typeof a!= 'number' || typeof b!= 'number'){
                rej('not a number')
            }else{
                res(a+b)
            }
        },2000)
    })
}

function display(sum){
    console.log(sum)
}


sum(1,'a').then(result =>{
    display(result)
}).catch(error =>{
    console.log(error)
})