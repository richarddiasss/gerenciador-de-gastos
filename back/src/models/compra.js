import mongoose from "mongoose";

const compraSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    preco: {type: Number, require:true},
    descricao: {type: String}
}, {versionKey: false});

const compra = mongoose.model("compras", compraSchema);

export default compra;