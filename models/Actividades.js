import mongoose from "mongoose";
const tareasSchema = mongoose.Schema({
    nombreMateria:{
        type: String,
        require: true,
        trim: true
    },
    nombreActividad:{
        type: String,
        require: true,
        trim: true
    },
    unidad: {
        type: String,
        require: true,
        trim: true
    },
    descripcion: {
        type: String,
        require: true,
        trim: true
    },
    calificacion: {
        type: String,
        require: true,
        trim: true
    },
    fecha: {
        type: Date,
        default: Date.now(),
    }

},
{
    timestamps: true,
})

const Tarea = mongoose.model("Tarea",tareasSchema);
export default Tarea;