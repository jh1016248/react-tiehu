const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const routers = require('./routers/index');
const bodyParser = require('koa-bodyparser');
const jwtKoa = require('koa-jwt');
require('./modules/mongoose');
const secret = 'chat-jwt'

app.listen(3000);
app.use(bodyParser());

app.use(cors({
    origin: function (ctx) {
        if (ctx.url === '/test') {
            return "*"; // 允许来自所有域名请求
        }
        return 'http://localhost:3001'; 
    },
    exposeHeaders: ['WWW-Authenticate', 'token', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['OPTION', 'GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'token', 'Accept'],
}))

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});
  
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(routers.routes()).use(routers.allowedMethods());


app.use(jwtKoa({secret}).unless({
    path: [/^\/api\/user\/login/, /^\/api\/user\/register/] //数组中的路径不需要通过jwt验证
}))

console.log('start host:3000')