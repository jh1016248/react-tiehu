const Article = require('../dbhelper/articleHelper')
const util = require('../util/util')

exports.getList = async (params) => {
    let list = await Article.getListByForumId(params);
    list = JSON.parse(JSON.stringify(list))
    let data = list.map(item => {
        item.date = util.getDayShow(item.createTime)
        return item
    })
    return {
        code: 1000,
        data: data,
        message: '获取成功'
    }
}