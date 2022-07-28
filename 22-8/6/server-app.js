var express = require("express");
var app = express();

app.use("/node_modules", express.static("node_modules"));
app.use("/src", express.static("src"));

app.get("/", function (req,res) {
    res.sendFile(__dirname+"/src/index.html");
});

var server = app.listen(50424, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("当前应用程序正在监听http://%s:%s", host, port);
});