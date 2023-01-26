import app from '../index';
import supertest from 'supertest';

const req = supertest(app);

describe('Server endpoints', () => {
  it('Gets status 200 for main route', async () => {
    const res = await req.get('/');
    expect(res.status).toBe(200);
  });
});
