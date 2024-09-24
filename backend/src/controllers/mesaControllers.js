import { Mesa } from "../components/models/mesaModels.js";



export const crearMesa = async (req, res) => {
    try {
        const ultimaMesa = await Mesa.findOne().sort({ numeroDeMesa: -1 });

        let nuevoNumeroMesa = 1;

        if (ultimaMesa) {
            nuevoNumeroMesa = ultimaMesa.numeroDeMesa + 1;
        }

        const nuevaMesa = new Mesa({
            numeroDeMesa: nuevoNumeroMesa,
            asientos: req.body.asientos,
            estado: req.body.estado
        });

        // Guardar la nueva mesa en la base de datos
        await nuevaMesa.save();

        // Enviar la respuesta con la nueva mesa creada
        res.status(201).json(nuevaMesa);
    } catch (error) {
        console.error("Error al crear mesa:", error);
        res.status(500).json({ error: "Error al crear mesa" });
    }
};

export const verMesas = async(req,res) =>{
    try {
        const mesas = await Mesa.find();
        res.json(mesas);
    } catch (error) {
        console.error("Error al obtener la lista de mesas:", error);
        res.status(500).json({ error: "Error al obtener la lista de mesas" });
    }
    }



export const eliminarMesa = async (req,res) =>{
    const id = req.params.id;
    
    try{
        const mesaEliminada = await Mesa.findByIdAndDelete(id);
        res.status(201).json(mesaEliminada);
        
        
    }catch(error){
        res.status(500).json({ error: "Error Al Intentar Eliminar La Mesa" });
    }
};



export const verCuentasEnMesa = async (req,res) => {
    try{
        const mesa = await Mesa.findById(req.params.id);
        if (!mesa){
            return res.status(404).json({ error: "Mesa no encontrada"});
        }
        res.status(200).json(mesa)
    }catch(error){
        res.status(500).json({error:"no se encontro la mesa"})
    }
};



export const reemplazarMesa = async (req,res) =>{
    try{
        const mesaReemplazada = await Mesa.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
            );
            if(!mesaReemplazada) {
                return res.status(404).json({error: "Mesa no encontrada"})
            }
            res.status(200).json(mesaReemplazada);
        }catch (error) {
            res.status(500).json({ error: "Error al actualizar la Mesa"})
        }

};

export const obtenerProximoNumeroMesa = async (req, res) => {
    try {
        const ultimaMesa = await Mesa.findOne().sort({ numeroDeMesa: -1 })
        let proximoNumeroDeMesa = 1

        if (ultimaMesa) {
            proximoNumeroDeMesa = ultimaMesa.numeroDeMesa + 1;
        }
        res.status(200).json({ proximoNumeroDeMesa })

    } catch (error) {
        console.error("Error al obtener mesa:", error);
        res.status(500).json({ error: "Error al obtener el próximo número de mesa" });
    }
}

export const modificarMesa = async (req,res) =>{
    try{
        const mesaActualizada = await Mesa.findByIdAndUpdate(
            req.params.id,
            { $set: req.body},
            { new: true }
            );

            
            if(!mesaActualizada) {
                return res.status(404).json({error: "mesa no encontrada"})
            }
            res.status(200).json(mesaActualizada);
        }catch (error) {
            res.status(500).json({ error: "Error al actualizar la mesa"})
        }

};

// export const agregarSilla = async (req,res) =>{

// };

// export const quitarSilla = async (req,res) =>{

// };





// export const agregarPersona = async (req,res) => {
    
// };


// export const quitarPersona = async (req,res) => {
    
// };






// export const historialDeCuentas = async (req,res) =>{
    
// };

// export const agregarCuenta = async (req,res) =>{
    
// };


// export const eliminarCuenta = async (req,res) =>{
    
// };






// export const crearReserva = async (req,res)=>{

// };
// export const eliminarReserva =  async (req,res)=>{

// };
// export const verReservas  = async (req,res)=>{

// };



