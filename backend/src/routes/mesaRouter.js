import express from "express";
import * as mesaModels from '../components/models/mesaModels.js';
import {
    obtenerProximoNumeroMesa,
    crearMesa,
    verMesas,
    eliminarMesa,
    reemplazarMesa,
    modificarMesa
} from "../controllers/mesaControllers.js"



const mesaRouter = express.Router();


mesaRouter.post("/crearMesa",crearMesa);


mesaRouter.get("/verMesas",verMesas);

mesaRouter.get("/obtenerProximoNumeroMesa", obtenerProximoNumeroMesa);

mesaRouter.delete("/eliminarMesa/:id",eliminarMesa);

mesaRouter.put("/reemplazarMesa/:id",reemplazarMesa);


mesaRouter.patch("/modificarMesa/:id",modificarMesa);

export default mesaRouter;