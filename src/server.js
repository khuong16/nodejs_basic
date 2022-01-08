
import express from 'express';
import configViewEngine from './configs/ViewEngine';
// import thư mục router
import initWebRoute from './route/web';
//import connection from './configs/connectDB';
import initAPIRoute from './route/api';

// require file .env
require('dotenv').config();
var morgan = require('morgan')

const app = express()

// gọi file env thông qua tham số process.
// sử dụng "||" để backUp port khi trc đó bị underfined.
const port = process.env.PORT || 8080;

// sử dụng morgan: giúp in ra cái logging của request từ client gửi về server
app.use((req, res, next) => {
    //check => return res.send()
    console.log('>>> run into my middleware')
    // logging method của request từ client gửi đến.
    console.log(req.method)
    // nếu mà request hợp lệ thì cho đi tiếp tới server của chúng ta.
    // chạy xuống các hàm dưới.
    // nếu ko có next() thì khi request ko hợp lệ thì nó sẽ ko cho thực hiện nữa.
    next();
})

app.use(morgan('combined'))

// config express hỗ trợ cho mình gửi data từ client xuống server
// để mình có thể lấy đơn giản.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// gọi config View Engine ra và truyền vào tham số app.
configViewEngine(app);

// init web route
initWebRoute(app);

// init api route
initAPIRoute(app);

// handle 404 not found:
app.use((req, res) => {
    return res.render('404.ejs');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})