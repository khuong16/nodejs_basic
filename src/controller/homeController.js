import pool from '../configs/connectDB';

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
    return res.send(JSON.stringify(user))
}

module.exports = {
    getHomePage, getDetailPage
}