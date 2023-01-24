import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes/index';

dotenv.config();

const app: Application = express();
const port: string | number = process.env.PORT || 5500;

app.use('/', router);

app.listen(port, (): void => {
  console.log(`Server is listening at http://localhost:${port}`);
});

export default app;
