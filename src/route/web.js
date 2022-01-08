// định nghĩa những cái router trong trang web của mình.
// sử dụng method là router() để định nghĩa các router tương ứng.

import express from "express";
import homeController from '../controller/homeController';
// Định nghĩa ra một cái biến router để sử dụng với Router.
let router = express.Router();

// Định nghĩa các router:
const initWebRoute = (app) => {
    // router sẽ get tới url là "/" và tới controller có tên là
    // homeController có hàm getHomePage tương ứng.
    router.get('/', homeController.getHomePage);

    // chi tiết người dùng
    router.get('/detail/user/:id', homeController.getDetailPage);

    // thêm người dùngh
    router.post('/create-new-user', homeController.createNewUser);

    // Return về đường link mặc định để mình init tất cả router.
    // Gọi chung là tiền tố thêm vào.
    return app.use('/', router);
}

export default initWebRoute;
//module.export = initWebRoute;