import imageSharpResize from '../../../routes/api/imageSharpResizing';
import fs from 'fs';
import path from 'path';

const thumbnailsPath = path.join(__dirname, '../../../../assets/thumbnails');
const imagePath = path.join(__dirname, '../../../../assets/stock');

describe('imageSharpResize', () => {
  it('should return the path of the requested image', async () => {
    const name = 'winnats';
    const width = 100;
    const height = 100;
    const expectedPath = path.join(thumbnailsPath, `${name}_${width}x${height}.jpg`);
    spyOn(fs, 'existsSync').and.returnValue(false);
    const result = await imageSharpResize(name, width, height);
    expect(result).toEqual(expectedPath);
  });

  it('should return the path of the already existing image', async () => {
    const name = 'sunseen';
    const width = 1000;
    const height = 800;
    const expectedPath = path.join(thumbnailsPath, `${name}_${width}x${height}.jpg`);
    spyOn(fs, 'existsSync').and.returnValue(true);
    const result = await imageSharpResize(name, width, height);
    expect(result).toEqual(expectedPath);
  });
});
