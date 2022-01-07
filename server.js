
const express = require('express')
const app = express()
const port = 3000

// router
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Minh Khương')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})