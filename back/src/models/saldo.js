import mongoose from "mongoose";

const saldoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    valor: {type: Number, require:true},
}, {versionKey: false});

const saldo = mongoose.model("saldos", saldoSchema);

export default saldo;