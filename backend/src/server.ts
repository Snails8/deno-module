import { WebEndpoint } from "./adapter/webEndpoint/webEndpoint.ts";
import { Application, Context } from "../deps.ts";
import { oakCors } from "../deps.ts";
import { router } from "./adapter/webEndpoint/router.ts";
import { Result } from "./common.ts";

export async function handler(ctx: Context, key: string): Promise<Result<unknown>> {
  const controller = new WebEndpoint(key);
  return await controller.delegate(ctx);
}

const PORT = 8100;
const app = new Application();

app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`start deno server!  http://localhost:${PORT}/`);
await app.listen({ port: PORT });