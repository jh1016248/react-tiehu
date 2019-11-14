import request from '../utils/request';

export function login({ account: username, password }) {
    return request.post(`/user/login`, { username, password })
}