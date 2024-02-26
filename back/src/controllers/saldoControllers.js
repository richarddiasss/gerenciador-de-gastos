import saldo from "../models/saldo.js";

class saldoController{

    static async apresentarSaldo(req, res) {
        try {
            const valor = await saldo.find({});
            return res.status(200).json(valor);
            
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição`});

        }
    }

    /* 
    static async adicionarSaldo(req, res) {
        try {
            const objetoSaldo = await this.apresentarSaldo();
            saldo.findByIdAndUpdate(objetoSaldo._id, req.body);
            res.status(200).json({message: "saldo atualizado"});
            
        } catch (error) {
            console.error({message: error.message}, "Ocoreu algum erro.");

        }

    }  */

    static async modificarSaldo(req, res) {
        try {
            const id = req.params.id;
            await saldo.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "saldo atualizado"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na atualização.`});
            
        }
    }
}

export default saldoController;