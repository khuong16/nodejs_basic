// định nghĩa những cái router trong trang web của mình.
// sử dụng method là router() để định nghĩa các router tương ứng.

import express from "express";
import { home } from "nodemon/lib/utils";
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

    // thêm người dùng
    router.post('/create-new-user', homeController.createNewUser);

    // xóa người dùng
    router.post('/delete-user', homeController.deleteUser);

    // chi tiết người dùng:
    router.get('/edit-user/:id', homeController.getEditPage);

    // update user
    router.post('/update-user', homeController.postUpdateUser)

    // Return về đường link mặc định để mình init tất cả router.
    // Gọi chung là tiền tố thêm vào.
    return app.use('/', router);
}

export default initWebRoute;
//module.export = initWebRoute;