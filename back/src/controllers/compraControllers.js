import compra from "../models/compra.js";

class compraController{

    static async listarCompras(req, res) {
        try {
            const listarCompras = await compra.find({});
            return res.status(200).json(listarCompras);
            
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição`});
        }
    }

    static async adicionarCompra (req, res) {

        try {
            const novaCompra = await compra.create(req.body);
            //window.alert("compra adicionada.");
            return res.status(201).json({message: "compra adicionado.", compra: novaCompra});
            
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao adicionar o livro.`});
        }
    }

}

export default compraController;