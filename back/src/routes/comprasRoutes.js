import express from "express";
import compraController from "../controllers/compraControllers.js";

const routes = express.Router();

routes.get("/compras", compraController.listarCompras);
routes.post("/compras", compraController.adicionarCompra);
routes.delete("/compras/:id", compraController.excluirCompra);

export default routes;