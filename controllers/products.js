const addProduct = () => {
    res.send("Add a product");
}
const getAllProducts = (req, res) => {
    res.send("This is to get all the products");
}


const getProduct = () => {
    res.send("This is to get a single product");
}

const updateProduct = () => {
    res.send("this is to update a product");
}


const deleteProduct = () => {
    res.send("delete a product");
}




module.exports = { 
    addProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
}