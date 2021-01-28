exports.getHomePage = (req, res, next) => {
    res.render("pages/index");
}
exports.getAboutPage = (req, res, next) => {
    res.render("pages/about");
}

exports.getContactPage = (req, res, next) => {
    res.render("pages/contact");
}
exports.getProductPage = (req, res, next) => {
res.render("pages/product");
}