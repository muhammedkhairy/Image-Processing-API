import express, { Request, Response, Router } from 'express';
import path from 'path';

const stockImage: Router = express.Router();

const imagePath = path.join(__dirname, '../../../assets/stock');

stockImage.use(express.static(imagePath));

stockImage.get('/', (req: Request, res: Response) => {
  const imageName = req.query.imageName as string;
  const imagesName = ['winnats', 'trees', 'sunseen', 'sandcastle', 'butterfly', 'tower'];

  if (imagesName.includes(imageName)) {
    console.log(`image in display is: ${imageName}`);
    return res.sendFile(imagePath + `/${imageName}.jpg`);
  }
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
  if (!imagesName.includes(imageName)) {
    return res.status(400).send(
      `<div style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="text-align: center; margin-bottom: 0; font-size: 72px">HTTP ERROR 400</h1>
        <h2 style="margin-top: 0; font-size: 48px">Image Not Found</h2>
        <h3 style="text-align: center; color: #1102BD; font-size: 36px">You did not enter a valid image name, Please check avaliable images and try again</h3>
        </div>
        `,
    );
  }
});

export default stockImage;
