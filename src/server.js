
import express from 'express';
import configViewEngine from './configs/ViewEngine';
// require file .env
require('dotenv').config();

const app = express()

// gọi file env thông qua tham số process.
// sử dụng "||" để backUp port khi trc đó bị underfined.
const port = process.env.PORT || 8080;

// gọi config View Engine ra và truyền vào tham số app.
configViewEngine(app);

// router
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})