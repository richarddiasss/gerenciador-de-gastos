import express from "express";
import saldoController from "../controllers/saldoControllers.js";

const routes = express.Router();

routes.get("/saldo", saldoController.apresentarSaldo);
routes.put("/saldo/:id", saldoController.modificarSaldo);

export default routes;