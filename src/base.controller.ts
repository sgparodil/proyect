import { FastifyReply, FastifyRequest } from 'fastify';

// Este handler maneja el endpoint GET /
export const helloWorldApi = async (request: FastifyRequest, reply: FastifyReply) => {
  return 'Hello, World!';
};