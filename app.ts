import * as Koa from "koa";
import * as Router from "koa-router";
import * as logger from "koa-morgan";

const app = new Koa();
const router = new Router();

router.get("/login", (ctx, _next) => {
  ctx.body = "Login";
  ctx.status = 200;
});
router.get("/", (ctx, _next) => {
  ctx.body = "Home";
  ctx.status = 200;
});

app
  .use(logger("tiny"))
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3001);
