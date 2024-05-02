const Koa = require('koa');
const cors = require('koa2-cors');
const router = require('./src/router');
//引入端口号
const { APP_PORT } = require('./src/config/server');

const app = new Koa();

// app.use(async (ctx, next) => {
//   ctx.response.body = 'Hello Koa'; // 设置响应体
//   await next(); // 调用下一个中间件
// });

// 定义允许跨域的origin
const allowOrigins = ['http://localhost:3000'];
app.use(
  cors({
    origin: function (ctx) {
      if (allowOrigins.includes(ctx.header.origin)) {
        return ctx.header.origin;
      }
      return false;
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    withCredentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  })
);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(APP_PORT, () => {
  console.log(APP_PORT, 'APP_PORT');
  console.log('服务器启动成功');
});
