const express = require('express');
const database = require('./configs/db');
const authRouter = require('./routes/auth');
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    return res.send('Hello World!');
});

app.use("/api/auth", authRouter);

app.listen(8080, () => {
    database();
    console.log("Listening on port 8080");
});