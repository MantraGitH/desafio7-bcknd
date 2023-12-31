import { Router } from "express";
import { ProductManager } from "../dao/FileSystem/ProductManager.js";
import { productValidator } from "../middlewares/productValidator.js";

const router = Router();
const productManager = new ProductManager();

router.get("/", async (req, res) => {
  try {
    const { limit } = req.query;
    const products = await productManager.getProducts();
    if (!limit) {
      res.status(200).json(products);
    } else {
      const productsByLimit = await productManager.getProductsByLimit(limit);
      res.status(200).json(productsByLimit);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productManager.getProductById(id);
    if (!product) {
      res.status(404).json({ error: "producto no encontrado" });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", productValidator, async (req, res) => {
  try {
    const productCreated = await productManager.addProduct(req.body);
    res.status(200).json(productCreated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const product = { ...req.body };
    const { id } = req.params;
    const productOk = await productManager.getProductById(id);
    if (!productOk) {
      res.status(404).json({ error: "producto no encontrado" });
    } else {
      await productManager.updateProduct(product, id);
    }
    res.status(200).json({ success: "Producto actualizado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await productManager.deleteProduct(id);
    res.json({ success: "Producto borrado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;