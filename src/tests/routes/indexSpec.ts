import router from '../../index';
import supertest from 'supertest';

const req = supertest(router);

describe('Test endpoints', () => {
  it('Gets status 200 for resize page', async () => {
    const res = await req.get('/resize');
    expect(res.status).toBe(200);
  });

  it('Gets status 301 for stock image page', async () => {
    const res = await req.get('/image');
    expect(res.status).toBe(301);
  });
});
