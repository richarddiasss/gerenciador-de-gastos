import express from "express";
import compras from "./comprasRoutes.js";
import cors from "cors";
import saldo from "./saldoRoutes.js";


const routes = (app) => {
    
    app.use(cors());
    
    app.route("/").get((req, res) => {
        res.status(200).send("testando back end");
    });

    app.use(express.json(), compras, saldo);
}

export default routes;