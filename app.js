const express = require("express");
const path = require("path")

// Include shop routes
const hw1 = require("./routes/myRoutes.js");


const PORT = 5555;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "static")));

app.use(hw1);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));