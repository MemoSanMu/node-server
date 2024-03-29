const Koa = require('koa')
const router = require('./src/router')
//引入端口号
const { APP_PORT } = require('./src/config/server')
const app = new Koa()

app.use(async (ctx, next) => {
  ctx.response.body = 'Hello Koa' // 设置响应体
  await next() // 调用下一个中间件
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(APP_PORT, () => {
  console.log(APP_PORT, 'APP_PORT')
  console.log('服务器启动成功')
})
