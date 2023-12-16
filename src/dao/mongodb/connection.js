import { connect } from "mongoose";

export const MONGO_URL =
  "mongodb+srv://camiloarias56:Camilo54750843@clusterprdm.as8xfkk.mongodb.net/ecommerce?retryWrites=true&w=majority";
export const initMongoDB = async () => {
  try {
    await connect(MONGO_URL);
    console.log("Conectado a MongoDB");
  } catch {
    console.log("Error al conectar con MongoDB");
  }
};

// cambié la password del string de conexión, la anterior era camiloarias56