function sum(a, b) {
    setTimeout(() => {
        let c = a + b;
        return c
    }, 2000)
}

function display(result) {
    console.log(result)
}

let res = sum(1, 2);
display(res)