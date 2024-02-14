function sum(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(typeof a!= 'number' || typeof b!= "number"){
                rej("not a number")
            }
            else{
            c = a+b
            res("from sum "+ c)
            }
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
    try{
        let res = await Promise.any([sum(1, '2'), display(5)])
        console.log(res)
    }catch(e){
        console.log(e)
    } 
}

test()