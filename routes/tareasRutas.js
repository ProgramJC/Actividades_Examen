import express from "express";
import { consultarActividad, crearActividad, eliminarActividad, actualizarActividad  } from '../controllers/tareasControlador.js'
const router = express.Router();

router.get('/', consultarActividad);
router.post('/', crearActividad);
router.delete('/:id', eliminarActividad);
router.put('/:id', actualizarActividad);

export default router;