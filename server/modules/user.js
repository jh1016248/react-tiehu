const mongoose = require('./mongoose');
const UserSchema = new mongoose.Schema({
    id: {type: String},
    loginName: {type: String},
    nickName: { type: String },
    type: {type: String},
    avatar: { type: String},
    password: {type: String}
}, {versionKey: false})

module.exports = mongoose.model('user', UserSchema, 'Users');