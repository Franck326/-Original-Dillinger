import express from "express"
import cors from "cors";
import mongoose from "mongoose";
import "../config/db.js"
import mesaRouter from "./routes/mesaRouter.js";
import cuentaRouter from "./routes/cuentaRouter.js";

const app = express()

app.use(cors());
app.use(express.json())

app.get("/inicio",(req,res)=>{
    res.send(`Dillinger!`)
})

app.use("/mesas", mesaRouter)


const port = 8080;

const server = app.listen(port, ()=>{
    console.log(`Projecto iniciado: PORT ${server.address().port}`)
    
})

