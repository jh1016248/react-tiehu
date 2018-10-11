const User = require('../dbhelper/userHelper')
const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify) // 解密
const secret = 'chat-jwt';

exports.register = async (query) => {
    let res = {};
    
    let insertRes = await User.insertUser(query);
    console.log(insertRes)
    if(insertRes) {
        res = {
            code: 1000,
            data: insertRes,
            message: "注册成功！"
        }
    }
    else{
        res = {
            code: 1100,
            data: {},
            message: "该账号已被注册"
        }
    }
    return res
}

exports.login = async (query) => {
    let res = {
        code: 1000,
        data: {},
        message: ""
    };
    let user = await User.getUser(query);

    if(user && user.id != null) {
        let payload = {
            id: user.id,
            loginName: user.loginName,
            nickName: user.nickName,
            type: user.type,
            avatar: user.avatar
        }
        let token = jwt.sign(payload, secret, {expiresIn: '24h'})
        res = {
            code: 1000,
            data: {
                token
            },
            message: '登录成功'
        }
    }
    else{
        res = {
           code: 1100,
           data: {},
           message: "用户名或密码错误"
        }
    }
    return res;
}

exports.getCurrentUser = async (ctx) => {
    let token = ctx.headers.token;
    let res = {};
    if (token) {
        jwt.verify(token, secret, (err, payload) => {
            if(err) {
                res = {
                    code: 1100,
                    data: {},
                    message: '登录状态失效，请重新登录'
                }
            }
            else{
                ctx.body = {
                    payload
                }
                res = {
                    code: 1000,
                    data: payload,
                    message: '获取当前用户成功'
                }
            }
        })
    } else {
        res = {
            code: 1100,
            data: {},
            message: '请登录'
        }
    }
    return res
}