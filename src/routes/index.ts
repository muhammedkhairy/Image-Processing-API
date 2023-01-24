import express, { Router, Request, Response } from 'express';
import path from 'path';
import imageSharp from './api/imageSharp';
import queriesCheck from './api/queriesCheck';
import resizeRouter from './api/resize';
import stockImage from './api/stockImages';

const router: Router = express.Router();

router.use(express.static(path.resolve(__dirname, '../../assets')));

//Serve main rote
router.get('/', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

//Serve resize page
router.use('/resize', resizeRouter);

//Serve displaying stock images
router.use('/image', stockImage);

//Serve displaying modified images
router.use('/requestedImage', queriesCheck);
router.use('/requestedImage', imageSharp);

export default router;
