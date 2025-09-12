import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares';
import router from './routes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', router);
app.use(errorHandler);

mongoose
  .connect(process.env.DB_URL as string)
  .then(() => {
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`Server started. URL: ${process.env.SERVER_URL}:${port}/`);
    });
  })
  .catch((err) => console.error('DB connection error:', err));
