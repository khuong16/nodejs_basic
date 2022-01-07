import express from "express";

const configViewEngine = (app) => {
    // nơi set quyền truy cập mà để public ra ngoài.
    app.use(express.static('./src/public'));
    // cấu hình view Egine là ejs.
    app.set("view engine", "ejs");
    // cấu hình nơi lưu trữ file ejs là views.
    app.set("views", "./src/views")

}

export default configViewEngine;