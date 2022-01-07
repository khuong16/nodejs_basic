import connection from '../configs/connectDB';

let getHomePage = (req, res) => {
    //logic
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        (err, results, fields) => {
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstName: row.firstName,
                    lastName: row.lastName
                })
            });
            // response về view: index.ejs và trả về chuỗi JSON dataUser tương ứng
            return res.render('index.ejs', { dataUser: data, test: 'abc string test' })
        })
}

// có thể export nhiều module.
module.exports = {
    getHomePage
}