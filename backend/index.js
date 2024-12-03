const express = require("express");
const app = express();

app.get('/', (res, req) => {
    res.send("Hello World");
});

const port = 3000;

app.listen(port, () => {
    console.log("ÔOOOH, o servidor está deveras online! 🚀");
});