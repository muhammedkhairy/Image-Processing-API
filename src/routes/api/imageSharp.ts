import express, { Router, Request, Response } from 'express';
import imageSharpResize from './imageSharpResizing';
import path from 'path';

const imageSharp: Router = express.Router();

imageSharp.get('/', async (req: Request, res: Response): Promise<void> => {
  const imageName = req.query.imageName as string;
  const imageWidth = req.query.width as string;
  const imageHeight = req.query.height as string;

  //Image arrays act as database can be expanded for development
  const imagesName: string[] | number[] = ['winnats', 'trees', 'sunseen', 'sandcastle', 'butterfly'];

  if (imagesName.includes(imageName) && parseInt(imageWidth) >= 0 && parseInt(imageHeight) >= 0) {
    const requestedImagePath = await imageSharpResize(imageName, parseInt(imageWidth), parseInt(imageHeight));

    if (requestedImagePath) {
      res.sendFile(requestedImagePath);
    } else {
      res.status(404).send('Image not found');
    }
  }
});

export default imageSharp;
