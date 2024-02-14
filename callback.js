/**a callback is a function that gets passed as an argument to another function 
 * and is called later when a certain action or task is completed.**/

function sum(a, b, callback) {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            callback('not a number', null)
        } else {
            callback(null, a + b)
        }
    }, 2000)
}

function display(err, res) {
    if (err) {
        console.log(err)
    }
    else {
        console.log(res)
    }
}

let res = sum(1, '2', display);
