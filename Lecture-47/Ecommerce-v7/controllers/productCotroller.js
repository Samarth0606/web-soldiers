const Product = require("../models/product");

const allProducts = async (req, res) => {
  try {
    let products = await Product.find({});
    res.render("products/index", { products });
  } catch (e) {
    res.status(500).render("error", { err: e.message });
  }
};

const nayaProduct = (req, res) => {
  try {
    res.render("products/new");
  } catch (e) {
    res.status(500).render("error", { err: e.message });
  }
};
module.exports = { allProducts, nayaProduct };
