import { Context, helpers } from "../../../deps.ts";

export const taskController = {
  getAll(ctx: Context) {
    ctx.response.body = 'Get All Tasks'
  },

  get(ctx: Context) {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    ctx.response.body = `Get Task By ID: ${id}`
  },

  create(ctx: Context) {
    ctx.response.body = 'Create Task'
  },

  update(ctx: Context) {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    ctx.response.body = `Update Task By ID: ${id}`
  },

  delete(ctx: Context) {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    ctx.response.body = `Delete Task By ID: ${id}`
  }
}