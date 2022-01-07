import express from "express";

const configViewEngine = (app) => {
    // cấu hình view Egine là ejs.
    // cấu hình nơi lưu trữ file ejs là views.
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}

export default configViewEngine;