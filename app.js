const express = require("express");
const bodyParser = require('body-parser');
const feedRoutes = require("./routes/feed")

const app = express();

app.use(bodyParser.json());

// Setting public and allowing access
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use("/feed", feedRoutes);


app.listen(3004);