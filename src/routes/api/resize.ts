import express, { Request, Response, NextFunction, Router } from 'express';
import path from 'path';

const resizeRouter: Router = express.Router();

resizeRouter.use(express.static(path.resolve(__dirname, '../../assets')));

resizeRouter.get('/', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../../src/resize.html'));
});

export default resizeRouter;
