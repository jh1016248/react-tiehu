const mongoose = require('./mongoose');
const ArticleSchema = new mongoose.Schema({
    id: {type: Number},
    forumId: {type: Number},
    title: {type: String},
    content: {type: String},
    thumb: {type: String},
    viewNum: {type: Number},
    creatorUserId: {type: Number},
    creatorUserName: {type: String},
    createTime: {type: Date},
}, {versionKey: false})

module.exports = mongoose.model('article', ArticleSchema, 'Articles');