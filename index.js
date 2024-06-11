/* const http = require("http")


const server = http.createServer((req, res) => {
    res.write("welcome to backend")
    res.end()
})

server.listen(4000, () => {
    console.log("server running on port 4000")
} ) */

import express from "express";
import phone from "./phones.js";

const product = [...phone];

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send(product);
});

app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
