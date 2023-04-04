const express = require('express')
const app = express()
const port = 3000
const max = 50
const delay = 2000

app.get('/', (req,res,next) => {
    res.setHeader('Content-Type', 'text/event-stream')
    set(req,res,0)
    req.on('close', () => {
        clearTimeout(req.timeout_id)
    })
})


let set = (req,res,counter) => {
    if(counter > max) {
        res.end("DONE")
        return
    }
    
    else {
        res.write(`data: ${counter} interval\n\n`)
        req.timeout_id = setTimeout(set, delay, req, res, ++counter)

    }
};



app.listen(port, () => console.log(`Example app listening on port ${port}!`))