import { Router, Context, helpers } from "../../deps.ts";
import { Result } from "../common.ts";
import { handler } from "./server.ts";

const router = new Router();
const APIVer = '/api/v1';

const setResponseData = (ctx: Context, result: Result) => {
  ctx.response.headers.set("Content-Type", "application/json; charset=utf-8");
  // ctx.response.status = result.code;
  ctx.response.type = "json"; // 不要かも
  ctx.response.body = {
    data: result.entity       // ここの渡し方見直し
  };
  return;
}

router.get(`${APIVer}/`, (ctx: Context) => {
  console.log('----test-get------------------');
  ctx.response.body = {sample: "test"};
})

router.get(`${APIVer}/users`, async (ctx: Context) => {
  const result = await handler(ctx, 'getUsers');
  setResponseData(ctx, result);
});

router.get(`${APIVer}/users/:userId`, async (ctx: Context) => {
  console.log(`------- getUserById: ${helpers.getQuery(ctx, { mergeParams: true })}------------------------`)
  const result = await handler(ctx, 'getUserById');
  setResponseData(ctx, result);
});

router.get(`${APIVer}/users/create`, async (ctx: Context) => {
  const result = await handler(ctx, 'postUser');
  setResponseData(ctx, result);
});

router.put(`${APIVer}/users/:userId`, async (ctx: Context) => {
  const result = await handler(ctx, 'getUserById');
  setResponseData(ctx, result);
});

export { router }