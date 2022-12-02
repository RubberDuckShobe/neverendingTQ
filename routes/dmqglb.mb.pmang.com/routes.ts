import { FastifyInstance } from "fastify";
import { Prisma, PrismaClient } from "@prisma/client";
import serviceHandler from "./serviceHandler";

interface RPCRequest {
  id: number;
  method: string;
  params: string[];
}

export interface RPCResponse {
  result: object; //Each module/function has to assign their own result object to this!
  error: object | null; //Unknown
  id: number;
}

export default async function routes(
  fastify: FastifyInstance,
  options: Object
) {
  //handles basically everything
  fastify.post<{
    Body: RPCRequest[];
  }>("/DMQ/rpc", async (request, reply) => {
    let result: RPCResponse[] = [
      {
        result: {},
        error: { message: "oops" },
        id: 0,
      },
    ];

    request.body.forEach((element) => {
      const module: string = element.method.split(".")[0];
      const method: string = element.method.split(".")[1];

      switch (module) {
        case "service":
          result = [serviceHandler(method, element.params)];
          result[0].id = request.body[0].id;
          break;
      }
    });
    return await result;
  });
}
