import express from 'express';
const router = express.Router();
import movieSchema from '../models/movie.model.js';

//crear pelicula
router.post('/movies', (req,res) =>{
    const movie = movieSchema(req.body);
    movie
     .save()
     .then((data) => res.json(data))
     .catch((error) => res.json({messaje: error}));
});

//obtener todas las peliculas
router.get('/movies', (req,res) =>{
    movieSchema
     .find()
     .then((data) => res.json(data))
     .catch((error) => res.json({messaje: error}));
});

//obtener una pelicula
router.get('/movies/:id', (req,res) =>{
    const { id } = req.params;
    movieSchema
     .findById(id)
     .then((data) => res.json(data))
     .catch((error) => res.json({messaje: error}));
});

//actualizar una pelicula
router.patch('/movies/:id', (req,res) =>{
    const { id } = req.params;
    const {titulo, poster, duracionMins, genero, anioEstreno, sinopsis} = req.body;

    movieSchema
     .updateOne({_id: id },{ $set: {titulo, poster, duracionMins, genero, anioEstreno, sinopsis}})
     .then((data) => res.json(data))
     .catch((error) => res.json({messaje: error}));
});

//eliminar una pelicula
router.delete('/movies/:id', (req,res) =>{
    const { id } = req.params;
    
    movieSchema
     .deleteOne({ _id: id })
     .then((data) => res.json(data))
     .catch((error) => res.json({messaje: error}));
});


export default router;