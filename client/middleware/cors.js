import cors from 'cors';

const corsMiddleware = cors({
    origin: 'https://quiz-flags.vercel.app/', 
    // Reemplaza '*' con el origen permitido o una lista de orígenes permitidos
    methods: ['GET'], // Reemplaza con los métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Reemplaza con los encabezados permitidos
});

export default corsMiddleware;
