// Hàm getHomePage
let getHomePage = (req, res) => {
    // logic abc, xyz ,...
    return res.render('index.ejs');
}

// có thể export nhiều module.
module.exports = {
    getHomePage
}