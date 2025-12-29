const express = require('express');
const app = express();

app.get('/home', (req,res) => {
    console.log("Hitting /home");
    return res.json({
        success: true,
        message: "Fetched Home."
    })
})

app.listen(3000, () => {
    console.log("Server started at port 3000.");
})