import express from "express";

const app = express();

app.get("/", (_req, res) =>{
    res.send("Hola mundo");
})

export default app;