import Fastify from "fastify";
import dmqglbRouter from "./routes/dmqglb.mb.pmang.com/routes";
import neonapiRouter from "./routes/www.neonapi.com/routes";
import fs from "fs";
import path from "path";

const fastify = Fastify({
  logger: {
    prettifier: "pino-pretty",
    level: "debug",
    messageKey: "message",
  },
  https: {
    cert: fs.readFileSync("./cert/dmtq.crt"),
    key: fs.readFileSync("./cert/dmtq.key"),
  },
});

fastify.addHook("preHandler", function (req, reply, done) {
  req.log.info("Request body: " + req.body);
  done();
});

fastify.listen({ port: 443 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

fastify.register(require("@fastify/static"), {
  //path probably won't be permanent
  root: path.resolve("./gameFiles"),
  prefix: "/", // optional: default '/'
});

fastify.register(dmqglbRouter);
fastify.register(neonapiRouter);
