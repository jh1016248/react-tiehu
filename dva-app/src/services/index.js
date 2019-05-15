import request from '../utils/request';

export function getArticle({ pageIndex }) {
    return request.get('/api/article/list', { forumId: 1, pageIndex, pageSize: 5 })
}

/*
const API = {
    login: '/api/user/login',
    register: '/api/user/register',
    getCurrentUser: '/api/user/getCurrentUser',
    getArticleList: '/api/article/list',
};

*/