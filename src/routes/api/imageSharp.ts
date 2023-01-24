import express, { Router, Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';
import { promises as fsPromises } from 'fs';

const imageSharp: Router = express.Router();

const imagePath = path.join(__dirname, '../../../assets/stock');
const thumbnailsPath = path.join(__dirname, '../../../assets/thumbnails');

imageSharp.get('/', (req: Request, res: Response) => {
  const imageName = req.query.imageName as string;
  const imageWidth = req.query.width as string;
  const imageHeight = req.query.height as string;

  //Image arrays act as database can be expanded for development
  const imagesName: string[] | number[] = ['winnats', 'trees', 'sunseen', 'sandcastle', 'butterfly'];

  //Check if everything is OK!
  if (imagesName.includes(imageName) && parseInt(imageWidth) >= 0 && parseInt(imageHeight) >= 0) {
    const imageExtension = `${imageName}.jpg`;

    (async function () {
      try {
        const image = await sharp(`${imagePath}/${imageExtension}`)
          .resize(parseInt(imageWidth), parseInt(imageHeight))
          .toFile(`${thumbnailsPath}/${imageName}_${parseInt(imageWidth)}x${parseInt(imageHeight)}.jpg`);
      } catch (error) {
        console.log(error);
      }
    })();
    res.sendFile(`${thumbnailsPath}/${imageName}_${parseInt(imageWidth)}x${parseInt(imageHeight)}.jpg`);
  }
});

export default imageSharp;
