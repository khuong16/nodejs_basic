
import express from 'express';
import configViewEngine from './configs/ViewEngine';

const app = express()
const port = 3000

// gọi config View Engine ra và truyền vào tham số app.
configViewEngine(app);

// router
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})