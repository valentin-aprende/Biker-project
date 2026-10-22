const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/Product");

const app = express();

app.use(cors());
app.use(express.json());


const PORT = 5000;

mongoose.connect(
  "mongodb://127.0.0.1:27017/danger"
)
.then(() => {
  console.log("MongoDB conectado");
})
.catch((error) => {
  console.error("Error de conexión:", error);
});

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.get("/products", async (req, res) => {
  try {

    const products = await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: "Error al obtener productos"
    });

  }
});

app.get("/products/:id", async (req, res) => {

  try {

    const product = await Product.findById(
      req.params.id
    );

    res.json(product);

  } catch (error) {

    res.status(500).json({
      message: "Error al obtener producto"
    });

  }

});

app.post("/products", async (req, res) => {

  try {

    if (!req.body.nombre) {
      return res.status(400).json({
        message: "El nombre es obligatorio"
      });
    }

    const newProduct =
      await Product.create(req.body);

    res.status(201).json(newProduct);

  } catch (error) {

    res.status(500).json({
      message: "Error al crear producto"
    });

  }

});



app.delete("/products/:id", async (req, res) => {

  try {

    await Product.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Producto eliminado"
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al eliminar producto"
    });

  }

});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

