
import express from 'express';
import configViewEngine from './configs/ViewEngine';
// import thư mục router
import initWebRoute from './route/web';
//import connection from './configs/connectDB';

// require file .env
require('dotenv').config();

const app = express()

// gọi file env thông qua tham số process.
// sử dụng "||" để backUp port khi trc đó bị underfined.
const port = process.env.PORT || 8080;

// config express hỗ trợ cho mình gửi data từ client xuống server
// để mình có thể lấy đơn giản.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// gọi config View Engine ra và truyền vào tham số app.
configViewEngine(app);

// init web route
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})