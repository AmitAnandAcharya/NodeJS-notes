/*an async function is a special type of function that can perform asynchronous operations. 
It can pause its execution using the await keyword while waiting for a promise to resolve*/

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

async function test(){
    try{
        let res = await sum(1,2)
        display(res)
    }
    catch(e){
        console.log(e)
    }
}

test()