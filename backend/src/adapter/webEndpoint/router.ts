import { Router, Context } from "../../../deps.ts";
import { taskController } from "../controller/taskController.ts";

const router = new Router();

const setResponseData = (ctx: Context, val: string) => {
  ctx.response.headers.set("Content-Type", "application/json; charset=utf-8");
  ctx.response.body = {
    data: val
  };
  return;
}

router.get(`/`, (ctx: Context) => {
  console.log('----test-get------------------');
  setResponseData(ctx, 'test');
})

router.get('/api/v1/books', taskController.getAll);
router.get('/api/v1/books/:id', taskController.get);
router.post('/api/v1/books', taskController.create);
router.put('/api/v1/books/:id', taskController.update);
router.delete('/api/v1/books/:id', taskController.delete);

export { router }

