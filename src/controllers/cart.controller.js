import * as service from "../services/cartService.js";

export const getAll = async (req, res, next) => {
  try {
    const carts = await service.getAll();
    res.status(200).json(carts);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getById = async (req, res, next) => {
  try {
    const cart = await service.getById(req.params.id);
    if (!cart) res.status(404).json("Carrito no encontrado");
    res.status(200).json(cart);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const create = async (req, res, next) => {
  try {
    const newCart = await service.create();
    if (!newCart) throw new Error("El carrito no pudo ser creado");
    res.status(200).json(newCart);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const remove = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedCart = await service.remove(id);
    if (!deletedCart) throw new Error("El carrito no pudo ser borrado");
    res.status(200).json(deletedCart);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedCart = await service.update(req.body, id);
    if (!updatedCart) throw new Error("El carrito no pudo ser actualizado");
    res.status(200).json(updatedCart);
  } catch (error) {
    throw new Error(error.message);
  }
};