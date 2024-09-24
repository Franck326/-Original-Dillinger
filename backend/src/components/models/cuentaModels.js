import mongoose from "mongoose";

const cuentaEsquema = new mongoose.Schema({
    mesa:{
        type: mongoose.Schema.Types.ObjectId,
        ref: `mesa`
    },
    creada: Date,
    cerrada: Date,
    consumo:[
        {
        pedido: Number,
        hora: Date,
        ultimaActualizacion: Date,
        estado: {
            type: String,
            enum: ["Pendiente", "Realizando", "Disponible", "Entregado"]
        },
        productos:[
            {producto: String,
            precio: Number}
        ]
        },

    ],
    total: Number


})



export const Cuenta = mongoose.model(`Cuenta`,cuentaEsquema);

