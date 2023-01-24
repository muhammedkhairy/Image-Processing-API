import express from 'express';
import fs from 'fs';
import path from 'path';

//define object to hold query parameters
interface queryParmeters {
  fileName: string;
  height: string;
  width: string;
}

class folderPath {
  static imagesFullPath = path.resolve(__dirname, '../assets');
  static generatedImage = path.resolve(__dirname, '../assets/thumbnails');

  static async imagePath(parameters: queryParmeters) {
    if (!parameters.fileName) {
      return null;
    }

    /* const filePath: string = parameters.width && parameters.height ? path.resolve(File.generatedImage, `${parameters.fileName}_${parameters.width}_${parameters.height}.jpg`) : path.resolve(File.imagesFullPath, `${parameters.fileName}.jpg`); */
  }
}
