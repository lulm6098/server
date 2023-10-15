const express = require("express");
const app = express();
const port = 3000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    next();
});

app.get("/hi", (req, res) => {
    res.json({ message: "Hi~~~." });
});

app.use(express.static(__dirname + "/client"));

app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
