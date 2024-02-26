import express from "express";
import compraController from "../controllers/compraControllers.js";

const routes = express.Router();

routes.get("/compras", compraController.listarCompras);
routes.post("/compras", compraController.adicionarCompra);

export default routes;