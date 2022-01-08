// định nghĩa những cái router trong trang web của mình.
// sử dụng method là router() để định nghĩa các router tương ứng.

import express from "express";
import APIController from '../controller/APIController'

// Định nghĩa ra một cái biến router để sử dụng với Router.
let router = express.Router();

// Định nghĩa các router:
const initAPIRoute = (app) => {

    // method GET
    router.get('/users', APIController.getAllUsers);

    // method POST => create data
    router.post('/create-user', APIController.createNewUser)

    // method PUT => Update User
    router.put('/update-user', APIController.updateUser);

    // method DELETE => delete User
    router.delete('/delete-user/:id', APIController.deleteUser);

    return app.use('/api/v1/', router);
}

export default initAPIRoute;
