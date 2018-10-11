const router = require('koa-router')()
let Article = require('../controllers/article');

const routers = router
    .get('/article/list', async ctx => {
        let res = await Article.getList(ctx.request.query)
        ctx.body = res
    })
module.exports = routers