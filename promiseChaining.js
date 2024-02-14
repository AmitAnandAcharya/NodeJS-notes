function sum(a, b) {
    return new Promise((resolve, reject) => {
        if(typeof a!= 'number' || typeof b!= 'number'){
            reject('not a number!')
        }else{
            setTimeout(() => {
                resolve(a + b)
            }, 2000)
        }
    })
}

function display(res) {
    console.log(res)
}

//without promise chain
sum(1,2).then((res1)=>{
    display(res1)
    sum(res1, 'a').then((res2)=>{
        display(res2)
        sum(res2, 4).then((res3)=>{
            display(res3)
        }).catch((e)=>{
            console.log(e)
        })
    }).catch((e)=>{
        console.log(e)
    })
}).catch((e)=>{
    console.log(e)
})

//with promise chain
sum(1,2).then((res1)=>{
    display(res1)
    return sum(res1, '3')
}).then((res2)=>{
    display(res2)
    return sum(res2, 4)
}).then((res3)=>{
    display(res3)
}).catch((e)=>{
    display(e)
})