import request from '../utils/request';

export function login({ account: loginName, password }) {
    return request.post(`/api/user/login`, { loginName, password })
}