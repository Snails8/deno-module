import { Router, Context } from "../../deps.ts";
import { handler } from "./server.ts";

const router = new Router();
const APIVer = '/api/v1';

router.get(`${APIVer}/`, (ctx: Context) => {
  console.log('entry---------------------');
  ctx.response.body = {sample: "test"};
})

export { router }