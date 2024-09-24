import express from "express";
import * as Cuenta from "../components/models/cuentaModels.js";
import {
    crearCuenta,
    verCuenta,
    eliminarCuenta,
    modificarCuenta,
    reemplazarCuenta,
} from '../controllers/cuentaControllers.js';

const cuentaRouter = express.Router();

//Rutas


cuentaRouter.post("/crearCuenta", crearCuenta);


cuentaRouter.get("/obtenerCuenta/:id", verCuenta);


cuentaRouter.delete("/eliminarCuenta/:id", eliminarCuenta);

cuentaRouter.put("/reemplazarCuenta/:id", reemplazarCuenta);


cuentaRouter.patch("/modificarCuenta/:id", modificarCuenta);

export default cuentaRouter;