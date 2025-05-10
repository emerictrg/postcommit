import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fastifyStatic from '@fastify/static';
import fastifyView from '@fastify/view';
import handlebars from 'handlebars';
import { join } from 'path';

const fastify: FastifyInstance = Fastify({ logger: true });

// Serve static files from the public directory
fastify.register(fastifyStatic, {
  root: join(__dirname, '../public'),
  prefix: '/',
});

fastify.register(fastifyView, {
  engine: {
    handlebars
  },
  root: join(__dirname)
})

fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
  return reply.viewAsync('home/home.hbs')
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server listening on http://0.0.0.0:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

