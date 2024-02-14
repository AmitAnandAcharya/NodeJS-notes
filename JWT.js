const jwt = require('jsonwebtoken')

//payload
const user ={
    name: "Amit",
    age:28
}
//secret
const secret = "key"

//jwt.sign(payload, secret, options) returns token
let token = jwt.sign(user, secret, {
    expiresIn: '1h',
    issuer: 'myapp',
    audience: 'https://api.myapp.com',
    algorithm: 'HS256'
  })

/**
 * token has 3 parts base64url encoded header & payload and 
 * a signature generated separately using the secret key and the specified algorithm.
 * 
 * header
{
  "alg": "HS256",
  "typ": "JWT"
}
 */


console.log("token:"+ token)


//jwt.verify(token, secret, options, callback) doesnt return anything
jwt.verify(token, secret, {issuer: 'myapp'}, (err,res)=>{
    if(err){
        console.log(err)
    }
    console.log(res)
})




