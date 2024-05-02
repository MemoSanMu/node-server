const koaRouter = require('koa-router');

const homeRouter = new koaRouter();

homeRouter.get('/api/home', (ctx) => {
  console.log(ctx.request, 'request');
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.body = {
    code: 0,
    data: {
      msg: 'home',
    },
  };
});

module.exports = { homeRouter };
