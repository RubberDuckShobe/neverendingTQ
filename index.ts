import Fastify from "fastify";
//import accountsRouter from "./routes/as1/accounts";
import fs from "fs";

const fastify = Fastify();

fastify.listen({ port: 8080 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

//fastify.register(accountsRouter);