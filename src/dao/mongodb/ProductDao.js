import { productModel } from "./models/productModel.js";

export default class ProductDao {
  async create(obj) {
    try {
      const response = await productModel.create(obj);
      return response;
    } catch (error) {
      throw new Error("Error al añadir el producto");
    }
  }

  async getAll() {
    try {
      const response = await productModel.find({}).lean();
      return response;
    } catch (error) {
      throw new Error("Error al obtener los productos");
    }
  }

  async getById(id) {
    try {
      const response = await productModel.findById(id);
      return response;
    } catch (error) {
      throw new Error("Error al obtener el producto por su id");
    }
  }

  async update(obj, id) {
    try {
      const response = await productModel.findByIdAndUpdate(id, obj, {
        new: true,
      });
      return response;
    } catch (error) {
      throw new Error("Error al actualizar los productos");
    }
  }

  async remove(id) {
    try {
      const response = await productModel.findByIdAndDelete(id);
      return response;
    } catch (error) {
      throw new Error("Error al borrar");
    }
  }

  async filter(category) {
    try {
      const response = await productModel.aggregate([
        {
          $match: { category: category },
        },
        { $sort: { price: 1 } },
      ]);
      return response;
    } catch (error) {
      throw new Error("Error al filtrar los productos");
    }
  }
}