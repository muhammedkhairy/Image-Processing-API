import request from 'supertest';
import express from 'express';
import stockImage from '../../../routes/api/stockImages';
import { Application } from 'express-serve-static-core';

describe('The Resize route tests', () => {
  let app: Application;

  beforeEach(() => {
    app = express();
    app.use('/', stockImage);
  });

  it('should return the stock image when passed a valid image name', (done) => {
    request(app).get('/?imageName=winnats').expect(200);
    done();
  });

  it('should return a 400 error when passed an empty image name', (done) => {
    request(app).get('/?imageName=').expect(400);
    done();
  });

  it('should return a 400 error when passed an invalid image name', (done) => {
    request(app).get('/?imageName=invalid').expect(400);
    done();
  });
});
