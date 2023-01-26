import express, { Router, Request, Response, NextFunction } from 'express';
import path from 'path';

const queriesCheck: Router = express.Router();

const imagePath = path.join(__dirname, '../../../assets/stock');

queriesCheck.get('/', (req: Request, res: Response, next: NextFunction) => {
  const imageName = req.query.imageName as string;
  const imageWidth = req.query.width as string;
  const imageHeight = req.query.height as string;

  //Image arrays act as database can be expanded for development
  const imagesName: string[] | number[] = ['winnats', 'trees', 'sunseen', 'sandcastle', 'butterfly'];

  //Check if width parameter is OK!
  if (imagesName.includes(imageName) && imageWidth === '' && parseInt(imageHeight) >= 0) {
    return res.send(
      `<h1 style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #2f1b41">Please enter a valid image width</h1>`,
    );
  }
  if (imagesName.includes(imageName) && imageWidth === '' && parseInt(imageHeight) <= 0) {
    return res.send(
      `<h1 style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #480032">Please enter a valid image width, and modify height yo be bigger than 0px</h1>`,
    );
  }
  if (imagesName.includes(imageName) && parseInt(imageWidth) <= 0 && parseInt(imageHeight) >= 0) {
    return res.send(
      `<h1 style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #df0e62">Please enter a valid image width, the width should be bigger than 0px</h1>`,
    );
  }

  //Check if height parameter is OK!
  if (imagesName.includes(imageName) && parseInt(imageWidth) >= 0 && imageHeight === '') {
    return res.send(
      `<h1 style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #283739">Please enter a valid image height</h1>`,
    );
  }
  if (imagesName.includes(imageName) && parseInt(imageWidth) <= 0 && imageHeight === '') {
    return res.send(
      `<h1 style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #000249">Please enter a valid image height, and modify width to be bigger than 0px</h1>`,
    );
  }
  if (imagesName.includes(imageName) && parseInt(imageWidth) >= 0 && parseInt(imageHeight) <= 0) {
    return res.send(
      `<h1 style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #062925">Please enter a valid image height, the height should be bigger than 0px</h1>`,
    );
  }

  //Check if width and height are OK
  if (imagesName.includes(imageName) && parseInt(imageWidth) <= 0 && parseInt(imageHeight) <= 0) {
    return res.send(
      `<h1 style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #cd4439">Please enter a valid image width and height, the height and width should be bigger than 0px</h1>`,
    );
  }
  if (imagesName.includes(imageName) && imageWidth === '' && imageHeight === '') {
    return res.send(
      `<h1 style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #000080">Please enter a valid image width and height, the height and width should be bigger than 0px</h1>`,
    );
  }

  //Check image name not empty
  if (imageName === '') {
    return res.status(400).send(
      `<div style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="text-align: center; margin-bottom: 0; font-size: 72px">HTTP ERROR 400</h1>
        <h2 style="margin-top: 0; font-size: 48px">Name Parameter is Empty</h2>
        <h3 style="text-align: center; color: #1102BD; font-size: 36px">You did not pass a valid image name, We cannot proceed without a valid image name parameter</h3>
        </div>
        `,
    );
  }

  //check image name is existed in our database
  if (!imagesName.includes(imageName)) {
    return res.status(400).send(
      `<div style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="text-align: center; margin-bottom: 0; font-size: 72px">HTTP ERROR 400</h1>
        <h2 style="margin-top: 0; font-size: 48px">Image Not Found</h2>
        <h3 style="text-align: center; color: #1102BD; font-size: 36px">You did not enter a valid image name, Please check available images and try again</h3>
        </div>
        `,
    );
  }
  next();
});

export default queriesCheck;
