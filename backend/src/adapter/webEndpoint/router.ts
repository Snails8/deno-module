import { Router, Context, helpers } from "../../../deps.ts";
import { taskController } from "../controller/taskController.ts";
import { Result } from "../../common.ts";
import { handler } from "../../server.ts";

const router = new Router();
const APIVer = '/api/v1';

const setResponseData = (ctx: Context, val: Result) => {
  ctx.response.headers.set("Content-Type", "application/json; charset=utf-8");
  ctx.response.body = {
    data: val
  };
  return;
}

router.get(`/`, (ctx: Context) => {
  ctx.response.body = 'test'
})

router.get('/api/v1/books', taskController.getAll);
router.get('/api/v1/books/:id', taskController.get);
router.post('/api/v1/books', taskController.create);
router.put('/api/v1/books/:id', taskController.update);
router.delete('/api/v1/books/:id', taskController.delete);

router.get(`${APIVer}/`, (ctx: Context) => {
  console.log('----test-get------------------');
  const result: Result<string> = {
    status: true,
    entity: 'sample'
  } 
  setResponseData(ctx, result);
})

router.post(`${APIVer}/create`, async (ctx: Context) => {
  console.log('----test-post------------------');
  const data = ctx.request.body();
  console.log(await data.value); //  {"name":"aa","email":"aaa","password":"aaa","role":"operator"}
});

router.put(`${APIVer}/:id`, async (ctx: Context) => {
  console.log(`---- test put ${helpers.getQuery(ctx, { mergeParams: true })}------------------`);
  const data = ctx.request.body();
  console.log(await data.value, `id is ${helpers.getQuery(ctx, { mergeParams: true })}`); //  {"name":"aa","email":"aaa","password":"aaa","role":"operator"}
});

router.get(`${APIVer}/users`, async (ctx: Context) => {
  const result = await handler(ctx, 'getUsers');
  setResponseData(ctx, result);
});

router.get(`${APIVer}/users/:userId`, async (ctx: Context) => {
  console.log(`------- getUserById: ${helpers.getQuery(ctx, { mergeParams: true })}------------------------`)
  const result = await handler(ctx, 'getUserById');
  setResponseData(ctx, result);
});

router.post(`${APIVer}/users/create`, async (ctx: Context) => {
  console.log('---------- create user --------------------------------------')
  const data = ctx.request.body();
  // const sample  = await data.value
  console.log(await data.value); //  {"name":"aa","email":"aaa","password":"aaa","role":"operator"}

  const result = await handler(ctx, 'postUser');

  setResponseData(ctx, result);
});

router.put(`${APIVer}/users/:userId`, async (ctx: Context) => {
  const result = await handler(ctx, 'getUserById');
  setResponseData(ctx, result);
});






export { router }

