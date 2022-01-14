const express = require('express')
const app = express()
const port = 4000
const name = "Gerardo"

app.get('/', (req, res ) =>{
    res.send(`Hello ${name}!`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})