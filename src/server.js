import { serve } from "https://deno.land/std@0.89.0/http/server.ts";

const s = serve({port:7000 });

console.log("http://localhost:7000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}

// deno run --allow-net src/server.js