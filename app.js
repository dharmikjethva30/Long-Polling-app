const express = require('express')
const app = express()
const port = 3000
const max = 50
const delay = 2000

let user = []

app.get('/', (req,res,next) => {
    res.setHeader('Content-Type', 'text/html')
    res.setHeader("transfer-encoding", "chunked")

    user.push(res)
} )


let counter = 0

setInterval(function count(){ 
    console.log(counter);
    if (++counter > max) {
        user.map(res => {
            res.write("DONE Polling");
            res. end()
        }
        )
        user = []
        counter = 0
    }
    user.map((res, n) => {
        res.write(`hi you are ${n} user, counter is ${counter}`);
    }
    )
    setTimeout(count, delay)
}, delay)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))