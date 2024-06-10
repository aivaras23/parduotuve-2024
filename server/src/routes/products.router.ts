import express from 'express';
import { ProductsController } from '../controllers/products.controller';


const productsRouter=express.Router();

productsRouter.get("/", ProductsController.getAll);
productsRouter.post("/", ProductsController.insert);
productsRouter.put("/", ProductsController.update);
productsRouter.delete("/", ProductsController.delete);

export {productsRouter};