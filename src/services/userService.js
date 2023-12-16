import UserDao from "../dao/mongodb/userDao.js";

const userDao = new UserDao();

export const findByEmail = async (email) => {
    try {
        const response = await userDao.findByEmail(email);
        return response;
    } catch (error) {
        throw new Error("Error al obtener el usuario por email");
    }
};

export const login = async (user) => {
    try {
        const response = await userDao.login(user);
        return response;
    } catch (error) {
        throw new Error("Error  al obtener el usuario por email");
    }
};

export const create = async (user) => {
    try {
        const response = await userDao.create(user);
        return response;
    } catch (error) {
        throw new Error("Error al añadir usuario");
    }
};