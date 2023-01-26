import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

// Path to thumbnails folder for check and resize
const thumbnailsPath = path.join(__dirname, '../../../assets/thumbnails');
const imagePath = path.join(__dirname, '../../../assets/stock');

//create a promise function
const imageSharpResize = async (name: string, width: number, height: number) => {
  const requestedImage = `${name}_${width}x${height}.jpg`;
  const requestedImagePath = path.join(thumbnailsPath, requestedImage);
  //console.log(requestedImagePath);

  try {
    if (fs.existsSync(requestedImagePath)) {
      return requestedImagePath;
    } else {
      const imageNameExt = `${imagePath}/${name}.jpg`;
      await sharp(imageNameExt).resize(width, height).toFile(`${thumbnailsPath}/${name}_${width}x${height}.jpg`);
      return requestedImagePath;
    }
  } catch (e) {
    console.error(e);
  }
};

export default imageSharpResize;
