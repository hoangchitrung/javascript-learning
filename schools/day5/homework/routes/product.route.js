import express from "express";
import { addProductController } from "../controller/product.controller.js";
import { validateProduct } from "../middleware/validateProduct.js";

const router = express.Router();

router.post("/product", validateProduct, addProductController);
export default router;