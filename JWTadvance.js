const jwt = require('jsonwebtoken')
const express = require('express')
const env =  require('dotenv').config()
const app = express()

const secretKey = process.env.secretKey
const PORT = process.env.PORT

app.get('/api/login', (req, res)=>{
    let {name:user} = req.query
    //only if payload is an object we can have expiresIn
    let token = jwt.sign({user}, secretKey, {expiresIn: '48h'}) 
    res.status(200).json({token: token})
} )

function authorizer(req, res, next){
    let token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, secretKey, (err, decoded)=>{
        if(err){
            res.status(403).json({msg: 'unauthorized'});
        }
        req.user = decoded
        next()
    })
}

app.get('/api/info', authorizer, (req, res)=>{
    const {user} = req
    let msg = "you're in"
    res.status(200).json({msg})
})


app.listen(PORT, ()=>{
    console.log('Server running in port', PORT)
})