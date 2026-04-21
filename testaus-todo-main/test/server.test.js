import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../server.js';

// Palvelimen perus-endpointtien testit
// Nämä varmennukset ovat kevyitä smoke-testejä, jotka kertovat
// että palvelin palauttaa oikeat JSON-vastaukset tärkeisiin reitteihin.
describe('server endpoints', () => {
  // Tarkistaa, että /health palauttaa tilan 'ok'
  it('GET /health returns status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  // Varmistaa, että /version palauttaa sovelluksen nimen ja version
  it('GET /version returns app meta', async () => {
    const res = await request(app).get('/version');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name', 'todo-training-app');
    expect(res.body).toHaveProperty('version');
  });
});
