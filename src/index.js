import express from 'express';
import mongoose from 'mongoose';
import movieRoutes from './routes/movie.route.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;
const uri = "mongodb+srv://adrianrojasortuno44:8EJSdvdagAQQ4R3m@cluster0.aetfj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//middleware
app.use(express.json());
app.use('/api', movieRoutes);
app.use(cors({
    origin: 'http://localhost:4200',
}));


//rutas
app.get('/', (req,res) =>{
    res.send('welcome to my API');
})

//conexion
mongoose.connect(uri)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error('Error al tratar de conectar con MongoDB Atlas', error.message));

app.listen(3000, () => console.log('server listening on port', port));