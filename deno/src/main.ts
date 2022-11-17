import { serve } from "../deps.ts";
import { Application } from "../deps.ts";

const PORT = 8000;

// ---- http 
// const s = serve(`0.0.0.0:${PORT}`);
// const body = new TextEncoder().encode("Hello World\n");

// console.log(`Server started on port ${PORT}`);
// for await (const req of s) {
//   req.respond({ body });
// }


// ork
const server = new Application();

server.use((ctx: any) => {
  ctx.response.body = 'Hello World! oak';
});
await server.listen({ port: PORT });