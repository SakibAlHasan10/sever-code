const findAllProductLib = require("../../../../lib/products/findAllProductLib");


const findAllProductApi= async (req, res) => {
    const filter = req.query;
    
    const allProduct= await findAllProductLib(filter)
    res.send(allProduct);
}


module.exports = findAllProductApi