import mongoose from "mongoose";

// // Coneccion al localhost
// const connectionString =
//   "mongodb://127.0.0.1:27017/coder47345";

// Coneccion al Atlas y node
const connectionAtlas =
  "mongodb+srv://Admin:ZdRuigFhu0ThXAkc@coder.9avecvk.mongodb.net/Practica-integradora-clase15?retryWrites=true&w=majority";

export const initMongoDB = async () => {
  try {
    await mongoose.connect(connectionAtlas);
    console.log("Conectado a la base de datos de MongoDB");
  } catch (error) {
    console.log(`ERROR => ${error}`);
  }
};
