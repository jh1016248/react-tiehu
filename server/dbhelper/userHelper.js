const User = require('../modules/user')
const Count =  require('./countHelper')


exports.insertUser = async (user) => {
    let users = await User.find({loginName: user.loginName}, (err, list) => {
        if(err) {
        }
        else{
            return list
        }
    })
    let lastId = await Count.getLastId('Users');
    if(users.length == 0 && lastId) {
        let newUser = {
            id: lastId,
            loginName: user.loginName,
            nickName: user.loginName,
            type: 1,
            avatar: 'https://avatars2.githubusercontent.com/u/112332?v=5',
            password: user.password
        }
        
        let insertRes = await User.create(newUser, (err, res) => {
            return err
        })
        if(!insertRes) {
            let success = await Count.updateId('Users', lastId);
            if(success) {
                return newUser
            }
        }
    }
    else{
        return false
    }
} 

exports.getUserById = async (id) => {
    let res =  await User.find({id: id}, function (err, users) {
        if(err) {
            return {};
        }
        else{
            return users[0]
        }
    })
    return res
}

exports.getUser = async (query) => {
    let user = await User.findOne(query, (err, users) => {
        if(err) {
            return {}
        }
        else{
            return users ? users[0] : {}
        }
    })
    return user
}
