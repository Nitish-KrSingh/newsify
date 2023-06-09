const express = require('express')
const axios = require('axios')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile("index.html",{ root: path.join(__dirname) })
})

app.get('/api', async(req, res) => {
    
    let url = "https://newsapi.org/v2/everything?"+req._parsedUrl.query
    let r = await axios(url)
    let a = r.data
   res.json(a)
   console.log(req._parsedUrl.query)
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})