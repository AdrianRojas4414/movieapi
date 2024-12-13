import mongoose from 'mongoose';

const  movieSchema = mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    poster:{
        type: String,
        required: true
    },
    duracionMins:{
        type: Number,
        required: true
    },
    genero:{
        type: String,
        required: true
    },
    anioEstreno:{
        type: Number,
        required: true
    },
    sinopsis:{
        type: String,
        required: true
    }
});

const movie = mongoose.model('Movie', movieSchema);

export default movie;