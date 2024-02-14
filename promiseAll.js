function sum(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            c = a+b
            res("from sum "+ c)
        }, 2000)
    })
}

function display(c) {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("from display "+c)
        }, 2000)
    })
}

async function test(){
    const res = await Promise.all([sum(1,2), display(3)]) //output [ 'from sum 12', 'from display 3' ]
    console.log(res)
    const [res1, res2] = await Promise.all([sum(1,2), display(3)]) //output from sum 12 from display 3
    console.log(res1, res2)
}

test()