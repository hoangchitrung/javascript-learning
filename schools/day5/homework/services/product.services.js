import { products } from "../data/data.js";

export function addProductService(name, quantity, price) {
    if (name === undefined || quantity === undefined || price === undefined) {
        throw new Error(`Please fill product information`);
    }

    const productName = products.find(p => p.name === name);

    if (productName) return json({ message: "Product Exist" });

    const newProduct = {
        id: Date.now(),
        name,
        quantity,
        price
    }
    products.push(newProduct);
    console.log(products);

    return products;
}