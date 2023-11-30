const findAllProductLib = require("../../../../lib/products/findAllProductLib");


const findAllProductApi= async (req, res) => {
    const filter = req.query;
    console.log(5000)
    const allProduct= await findAllProductLib(filter)
    res.send(allProduct);
}


module.exports = findAllProductApi