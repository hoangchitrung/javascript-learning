// init data
let products = [
    { id: 1, name: 'iPhone 15', price: 1000 },
    { id: 2, name: 'Samsung S24', price: 900 },
    { id: 3, name: 'Xiaomi 14', price: 400 },
]

// Add products
const addProduct = (name, price) => {
    const id = Math.floor(Math.random() * 1000);

    const newProduct = { id: id, name: name, price: price };
    products.push(newProduct)
    console.log(`[Add] ${newProduct.name} into the products`);

}

// Remove products
const removeProduct = (id) => {
    products = products.filter(item => item.id !== id);
    console.log(products);
}

// Search Product
const searchProduct = (name) => {
    const searchProduct = products.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
    console.log(searchProduct);

}
// Sort Product
const sortProduct = () => {
    const sortProduct = products.sort((a, b) => a.id - b.id);
    console.log(sortProduct);

}

addProduct("Oppo", 800);
console.log(products);
removeProduct(3);
searchProduct("Samsung S24");
sortProduct();