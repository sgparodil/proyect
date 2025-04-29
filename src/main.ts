import fastify from 'fastify';

const app = fastify({ logger: true });

// 1. GET que retorna "Hello World"
app.get('/', async () => {
  return { message: "Hello World" };
});

// 2. POST que recibe y retorna un body dinámico
app.post('/echo', async (request, reply) => {
  const body = request.body;
  return { received: body };
});

// 3. PUT que recibe un parámetro en la URL
app.put('/item/:id', async (request, reply) => {
  const { id } = request.params as { id: string };
  return { receivedParam: id };
});

// 4. GET que recibe un queryParam "id"
app.get('/query', async (request, reply) => {
  const { id } = request.query as { id: string };
  return { id };
});

// Iniciar servidor
const start = async () => {
  try {
    await app.listen({ port: 3001 });
    console.log('Server listening at http://localhost:3001');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();