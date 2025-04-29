import { describe, it, expect } from 'vitest';
import { build } from '../src/app';

describe('GET /', () => {
  it('debería retornar "Hello, World!"', async () => {
    const app = build();

    const response = await app.inject({
      method: 'GET',
      url: '/',
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ message: 'Hello, World!' }); // Ahora sí será JSON
  });
});