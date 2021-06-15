const fastify = require('fastify')({ logger: false });

const port = 4001;

fastify.get('/comments', async (request, reply) => {
    return reply.send({})
});


const start = async () => {
    try {
      await fastify.listen(port)
      console.log(`server on port ${port}`);
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start();