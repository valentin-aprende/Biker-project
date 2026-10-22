const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },

  descripcion: {
    type: String,
    required: true
  },

  imagen: {
    type: String,
    required: true
  }
});

const Product = mongoose.model(
  "Product",
  productSchema
);

module.exports = Product;