import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../server.js';

describe('server endpoints', () => {
  it('GET /health returns status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('GET /version returns app meta', async () => {
    const res = await request(app).get('/version');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name', 'todo-training-app');
    expect(res.body).toHaveProperty('version');
  });
});
