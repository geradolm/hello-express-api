const express = require('express')
const app = express()
const port = 4000
// const name = "Gerardo"

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.get('/', (req, res ) =>{
//     res.send(`Hello ${name}!`)
// })

app.get('/:name', (req, res) => {
  res.send(`Hello ${req.params.name}!`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})