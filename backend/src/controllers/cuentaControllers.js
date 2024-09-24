import {Cuenta} from "../components/models/cuentaModels.js"



export const crearCuenta = async(req,res) =>{
    try{
        const nuevaCuenta = await Cuenta.create(req.body);
        res.status(201).json(nuevaCuenta);
    }catch(error){
        res.status(500).json({ error: "Error al crear Cuenta" });
    }
};

export const verCuenta =async (req,res) => {

    try{
        const cuenta = await Cuenta.findById(req.params.id);
        if (!cuenta){
            return res.status(404).json({ error: "cuenta no encontrada"});
        }
        res.status(200).json(cuenta)
    }catch(error){
        res.status(500).json({error:"no se encontro la cuenta"})
    }
};



export const eliminarCuenta = async (req, res) =>{
    try{
        const cuentaEliminada = await Cuenta.findByIdAndDelete(req.params.id);
        res.status(201).json(cuentaEliminada);
        if(!cuentaEliminada){
            return res.status(404).json({error:"cuenta no Eliminada"});
        }
        res.status(200).json({ mensaje: "Se a Eliminado la cuenta"})
    }catch(error){
        res.status(500).json({ error: "Error Al Intentar Eliminar La cuenta"})
    }
};

export const modificarCuenta = async (req,res) =>{
    try{
        const cuentaActualizada = await Cuenta.findByIdAndUpdate(
            req.params.id,
            { $set: req.body},
            { new: true }
            );

            
            if(!cuentaActualizada) {
                return res.status(404).json({error: "cuenta no encontrada"})
            }
            res.status(200).json(cuentaActualizada);
        }catch (error) {
            res.status(500).json({ error: "Error al actualizar la cuenta"})
        }

};


export const reemplazarCuenta = async (req,res) =>{
    try{
        const cuentaReemplazada = await Cuenta.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
            );
            if(!cuentaReemplazada) {
                return res.status(404).json({error: "cuenta no encontrada"})
            }
            res.status(200).json(cuentaReemplazada);
        }catch (error) {
            res.status(500).json({ error: "Error al Reemplazar la cuenta"})
        }

};

// export const agregarPedidoCuenta =async (req,res) =>{
    
// };

// export const cerrarCuenta =async (req,res) => {

// };