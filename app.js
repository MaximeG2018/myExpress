var myExpress_1 = require("./myExpress");
var app = myExpress_1["default"]();
var port = 3000;
// GET
app.get("/get", function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Je suis la Route : GET');
    res.end();
});
// DELETE
app.delete("/delete", function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Je suis la Route : DELETE');
    res.end();
});
// POST
app.post("/post", function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Je suis la Route : POST');
    res.end();
});
// PUT
app.post("/put", function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Je suis la Route : PUT');
    res.end();
});
// ALL
app.all("/all", function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('ALL');
    res.end();
});
// LISTEN
app.listen(port, function () {
    console.log("The server is launched");
});
