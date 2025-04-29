import { describe, it, expect } from 'vitest';
import { helloWorldApi } from '../src/base.controller';
import { FastifyRequest, FastifyReply } from 'fastify';

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    // Creamos mocks de request y reply
    const mockRequest = {} as FastifyRequest;
    
    const mockReply = {
      send: (response: any) => response
    } as unknown as FastifyReply;

    const response = await helloWorldApi(mockRequest, mockReply);
    expect(response).toBe('Hello, World!');
  });
});