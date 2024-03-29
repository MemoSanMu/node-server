const koaRouter = require('koa-router')

const homeRouter = new koaRouter()

homeRouter.get('/home', (ctx, next) => {
  ctx.body = 'this is home'
})

module.exports = { homeRouter }
