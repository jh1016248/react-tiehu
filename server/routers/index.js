const router = require('koa-router')()

const user = require('./user')
const article = require('./article')

router.use('/api', 
    user.routes(), user.allowedMethods(), 
    article.routes(), article.allowedMethods()
)
module.exports = router
