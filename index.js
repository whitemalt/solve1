// import express from 'express'
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

// create application/json parser
const jsonParser = bodyParser.json()

app.get("/" , (req ,res) => {
    res.send("app is running");
})

app.get("/view/:id", (req, res) => {
    res.send(req.params.id);
})

app.get("/view", (req, res) => {
    res.send("view all");
})

app.post("/save", jsonParser , (req ,res ) => {
    console.log(req.body.long);
    console.log("hello");
    res.send("succuss")
})

app.listen(8000, () => console.log('Example app listening on port 8000!'))