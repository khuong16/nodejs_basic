import pool from '../configs/connectDB';
import multer from 'multer';


// get data
let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.render('index.ejs', { dataUser: rows, test: 'abc string test' })
}

// get detail data
let getDetailPage = async (req, res) => {
    // biến id đc nhận từ web.js ở params.
    let userId = req.params.id;
    // nhận result của statement thông qua biến user đang đc lưu.
    let [user] = await pool.execute(`select * from users where id = ?`, [userId]);
    return res.send(user)
}

let createNewUser = async (req, res) => {
    // sử dụng req.body để lấy các giá trị trong các ô input
    console.log(">>>> check req: ", req.body)
    let { firstName, lastName, email, address } = req.body;

    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)',
        [firstName, lastName, email, address]);

    // redirect về trang home của mình.
    return res.redirect('/')
}

let deleteUser = async (req, res) => {
    let { userId } = req.body;

    await pool.execute('delete from users where id = ?', [userId]);

    return res.redirect('/')
}

let getEditPage = async (req, res) => {
    let id = req.params.id;
    // [user] sẽ trả ra một mảng array nên là muốn lấy phần tử đầu thì phải [0]
    let [user] = await pool.execute('Select * from users where id = ?', [id]);
    // return res.send(JSON.stringify(user)); // x <- y
    return res.render('update.ejs', { dataUser: user[0] }) // x <- y
}

let postUpdateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;

    await pool.execute('update users set firstName= ?, lastName = ? , email = ? , address= ? where id = ?',
        [firstName, lastName, email, address, id]);

    return res.redirect('/');
}


let getUploadFilePage = async (req, res) => {
    return res.render('uploadFile.ejs');
}

// xử lý với name 'profile_pic
const upload = multer().single('profile_pic');

let handleUploadFile = async (req, res) => {
    // 'profile_pic' is the name of our file input field in the HTML form

    upload(req, res, function (err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        // Display uploaded image for user validation
        res.send(`You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`);
    });
}

module.exports = {
    getHomePage, getDetailPage, createNewUser, deleteUser, getEditPage, postUpdateUser, getUploadFilePage, handleUploadFile
}