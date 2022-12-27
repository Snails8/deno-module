import { WebEndPoint } from "../adapter/end-point.ts";
import { Application, Context } from "../../deps.ts";
import { oakCors } from "../../deps.ts";
import { router } from "./router.ts";
import { Result } from "../common.ts";

export async function handler(ctx: Context): Promise<Result<unknown>> {
  const controller = new WebEndPoint();
  return await controller.delegate(ctx);
}

const app = new Application();

app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

console.log('start deno server!  http://localhost:8000/');
await app.listen({ port: 8100 });