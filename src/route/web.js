// định nghĩa những cái router trong trang web của mình.
// sử dụng method là router() để định nghĩa các router tương ứng.

import express from "express";
import homeController from '../controller/homeController';
// Định nghĩa ra một cái biến router để sử dụng với Router.
import multer from 'multer';
import path from 'path';
var appRoot = require('app-root-path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + "/src/public/image/");
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });

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

    router.get('/upload', homeController.getUploadFilePage);

    // sau khi router cần có 1 middleware là upload.single
    router.post('/upload-profile-pic', upload.single('profile_pic'), homeController.handleUploadFile);

    // Return về đường link mặc định để mình init tất cả router.
    // Gọi chung là tiền tố thêm vào.
    return app.use('/', router);
}

export default initWebRoute;
//module.export = initWebRoute;