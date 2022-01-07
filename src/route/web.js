// định nghĩa những cái router trong trang web của mình.
// sử dụng method là router() để định nghĩa các router tương ứng.

import express from "express";
import homeController from '../controller/homeController';
// Định nghĩa ra một cái biến router để sử dụng với Router.
let router = express.Router();

const initWebRoute = (app) => {
    // router sẽ get tới url là "/" và tới controller có tên là
    // homeController có hàm getHomePage tương ứng.
    router.get('/', homeController.getHomePage);

    // Return về đường link mặc định để mình init tất cả router.
    // Gọi chung là tiền tố thêm vào.
    return app.use('/', router);
}

export default initWebRoute;
//module.export = initWebRoute;