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

async function test(){
    let res1 = await sum(1,2)
    //console.log("back from sum")
    let res2 = await display(res1)
    //console.log("back from display")
    console.log(res2)
}

test()