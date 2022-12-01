import { FastifyInstance } from "fastify";
import { Prisma, PrismaClient, Member } from "@prisma/client";

export default async function routes(
    fastify: FastifyInstance,
    options: Object
  ) {
    fastify.post<{
        Body: any;
      }>("/DMQ/rpc", async (request, reply) => {
        return await "";
      });
  }