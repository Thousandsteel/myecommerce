/* const http = require("http")


const server = http.createServer((req, res) => {
    res.write("welcome to backend")
    res.end()
})

server.listen(4000, () => {
    console.log("server running on port 4000")
} ) */

import express from "express";
import cors from cors
import phones from "phones.js"

app.use(
  cors({
    origin: "*" 
  })
)

const product = [...phones]

const app = express();

const port = 3000;

app.get("/phones", (req, res) => {
  res.send(product);
});

app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
