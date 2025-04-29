import fastify from 'fastify';

export function build() {
  const app = fastify();

  app.get('/', async (request, reply) => {
    return { message: 'Hello, World!' }; // JSON válido
  });

  return app;
}