import express from 'express';
import noteRoutes from './routes/noteRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());

app.use(noteRoutes);

app.use(errorHandler);

export default app;
