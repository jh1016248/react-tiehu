const Article = require('../modules/article')
const Count =  require('./countHelper')

exports.getListByForumId = async (query) => {
    let pageSize = parseInt(query.pageSize) || 5,
        pageIndex = isNaN(query.pageIndex) ? 0 :  (query.pageIndex - 1) * pageSize;
    let res = await Article.find({forumId: query.forumId}).limit(pageSize).skip(pageIndex)
    
    return res;
}