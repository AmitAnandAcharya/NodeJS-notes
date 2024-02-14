function sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b)
        }, 2000)
}

function display(sum, callback) {
        setTimeout(() => {
            callback(sum+1)
        }, 2000)
}

let res1 = sum(1,2, (res1)=>{
    display(res1, (res2)=>{
        console.log(res2)
    })
})
