import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/conexionDB.js";
import tareasRutas from "./routes/tareasRutas.js";
import cors from "cors";
const app = express();
app.use(express.json());
dotenv.config();
conectarDB();
const listaBlanca = [process.env.FRONTED_URL] 
const corsOptions = {
  origin: function(origin, callback){
    console.log(origin)
    if(listaBlanca.includes(origin)){
      callback(null, true)
    }else{
      callback(new Error("Error de Cors"))
    }
  }
}
app.use(cors(corsOptions))
app.use("/api/tareas", tareasRutas);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
