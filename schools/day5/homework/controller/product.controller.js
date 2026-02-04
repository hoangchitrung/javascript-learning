import { addProductService } from "../services/product.services.js";

export const addProductController = (req, res) => {
    const { name, quantity, price } = req.body;

    const addProduct = addProductService(name, quantity, price);

    if (!addProduct)
        return res.status(404).json({ message: "Can not add product" })

    return res.status(200).json({ message: "Product Added!" });
}