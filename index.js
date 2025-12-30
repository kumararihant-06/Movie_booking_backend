const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');

env.config();
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/home', (req,res) => {
    console.log("Hitting /home");
    return res.json({
        success: true,
        message: "Fetched Home."
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}.`);
})