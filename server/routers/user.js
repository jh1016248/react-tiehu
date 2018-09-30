const router = require('koa-router')()
let User = require('../dbhelper/userHelper');

const routers = router
    .get('/user', async ctx => {
        let user = await User.getUser({nickName: "猪宏"})
        ctx.body = {
            code: 1000,
            data: user
        }
    })
    .post('/user/register', async ctx => {
        let res = await User.register(ctx.request.body)
        ctx.body = res
    })
    .post('/user/login', async ctx => {
        let res = await User.login(ctx.request.body)
        ctx.body = res;
    })
    .get('/user/getCurrentUser', async ctx => {
        let res = await User.getCurrentUser(ctx)
        ctx.body = res;
    })
module.exports = routers