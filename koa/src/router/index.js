const KoaRouter = require('koa-router')
const { homeRouter } = require('./home')

const router = new KoaRouter()

router.use(homeRouter.routes())

module.exports = router
