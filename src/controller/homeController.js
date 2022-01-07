import connection from '../configs/connectDB';

let getHomePage = (req, res) => {
    //logic
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstName: row.firstName,
                    lastName: row.lastName
                })
            });
            return res.render('index.ejs', { dataUser: JSON.stringify(data) })
        })
}

// có thể export nhiều module.
module.exports = {
    getHomePage
}