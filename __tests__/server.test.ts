import app from '../server/server';
import supertest from 'supertest';

const request = supertest(app);

afterAll(() => app.close());

describe('/test endpoint', () => {
  it('should return a response', async () => {
    const response = await request.get('/test');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello world');
  });
});
