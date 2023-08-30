//Aqui especificamos la funcionalidad de del endpoint
import Actividad from "../models/Actividades.js"

const consultarActividad = async (req, res) =>{
    const actividades = await Actividad.find();
    res.json(actividades)
}
const crearActividad = async ( req, res )=>{
    try {
        const actividad = new Actividad(req.body);
        const actividadUpdate = await actividad.save();
        res.json(actividadUpdate);
    } catch (error) {
        console.log(error)
    }
}
const eliminarActividad = async(req, res) =>{
     const {id} = req.params;
     console.log(id)
    const actividad = await Actividad.findById(id);
    if (!actividad) {
        const error = new Error("Actividad no encontrada")
        return res.status(404).json({ msg: error.message })
    }
    try {
        await actividad.deleteOne();
        res.json({ msg: "Actividad Eliminada"})
    } catch (error) {
        console.log(error)
    }
}

const actualizarActividad = async(req, res)=>{
    const {id} = req.params;
    const actividad = await Actividad.findById(id);
    if (!actividad) {
        const error = Error("Actividad no encontrada");
        return res.status(404).json({msg: error.menssage});
    } else {
        
    }
    actividad.nombreMateria = req.body.nombreMateria || actividad.nombreMateria;
    actividad.nombreActividad = req.body.nombreActividad || actividad.nombreActividad;
    actividad.unidad = req.body.unidad || actividad.unidad;
    actividad.descripcion = req.body.descripcion || actividad.descripcion;
    actividad.calificacion = req.body.calificacion || actividad.calificacion;

    try {
        const actividadUpdate = await actividad.save()
        res.json(actividadUpdate);
    } catch (error) {
        console.log(error)
    }
}


export { consultarActividad, crearActividad, eliminarActividad, actualizarActividad };