import myExpress from "./myExpress";
import { IncomingMessage, ServerResponse } from "http"

const app = myExpress();
const port = 3000;

// GET
app.get("/get",(req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Je suis la Route : GET');
    res.end();
})

// DELETE
app.delete("/delete",(req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Je suis la Route : DELETE');
    res.end();
})

// POST
app.post("/post", (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Je suis la Route : POST')
    res.end()
})

// PUT
app.post("/put", (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Je suis la Route : PUT')
    res.end()

})

// ALL
app.all("/all", (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('ALL')
    res.end()
})

// LISTEN
app.listen(port, () => {
  console.log("The server is launched")
})
