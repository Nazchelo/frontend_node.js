const  {getHomePage, getAboutPage, getContactPage, getProductPage} = require("../controllers/shopController");

const { request } = require("express");

const express = require("express");

const router = express.Router();

router.get("/", getHomePage);

router.get("/about", getAboutPage);

router.get("/contact", getContactPage);

router.get("/product", getProductPage);


module.exports = router;