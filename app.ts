import myExpress from "./myExpress";

const app = myExpress();
app.listen(8000);


// GET
app.get("/get",(req,res) => {
    console.log("coucou je suis un GET");
    res.write('coucou je suis un GET');
    res.end();
})

// DELETE
app.delete("/delete",(req,res) => {
    console.log("coucou je suis un DELETE");
    res.write('coucou je suis un DELETE');
    res.end();
})

// POST
app.post("/post", (req,res) => {
    console.log("coucou je suis un POST")
    res.write('coucou je suis un POST')
    res.end()
})

// PUT
app.post("/put", (req,res) => {
    console.log("coucou je suis un PUT")
    res.write('coucou je suis un PUT')
    res.end()

})

// ALL
app.all("/coucou", (req,res) => {
    console.log("coucou je suis un ALL")
    res.write('coucou je suis un ALL')
    res.end()
})
