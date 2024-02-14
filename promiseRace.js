function sum(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("from sum "+ a + b)
        }, 5000)
    })
}

function display(c) {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("from display "+c)
        }, 1000)
    })
}

async function test(){
    const res = await Promise.race([sum(1,2), display(3)])
    console.log(res)

}

test()