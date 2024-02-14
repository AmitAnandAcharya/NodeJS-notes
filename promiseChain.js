function sum(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(a + b)
        }, 2000)
    })
}

function display(sum) {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(sum+1)
        }, 2000)
    })
}


sum(1,2).then(res1 => {
    //console.log("back from sum function")
    display(res1).then(res2=>{
        //console.log("back from display function")
        console.log(res2)
    })
}).catch(error => {
    console.log(error)
})

