export const validateProduct = (req, res, next) => {
    const { name, quantity, price } = req.body;

    if (!name) return res.status(400).json({ message: "Name can not empty" });
    if (quantity < 1) return res.status(400).json({ message: "Quantity should equal or greater 1" });
    if (price < 0) return res.status(400).json({ message: "price should be equal 0 or greater" });

    next();
}