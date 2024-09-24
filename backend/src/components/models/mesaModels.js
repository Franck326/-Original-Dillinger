import mongoose from "mongoose";


const mesaEsquema = new mongoose.Schema({
    numeroDeMesa : Number,
    asientos : Number,
    estado: {
        type: String,
        enum: ["Libre", "Reservada", "Ocupada"]
    },

}) 


export const Mesa = mongoose.model('Mesa', mesaEsquema);