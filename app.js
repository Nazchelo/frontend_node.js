const express = require("express");

// Include shop routes
const hw1 = require("./routes/myRoutes.js");

const PORT = 5555;
const app = express();

app.use(hw1);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));