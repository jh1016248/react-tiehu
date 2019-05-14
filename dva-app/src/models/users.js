import * as userServices from '../services/users';

console.log(userServices)
export default {
    namespace: 'users',
    state: {

    },
    reducers: {

    },
    effects: {
        *login({ payload: values }, {put, call, select}) {
            return yield call(userServices.login, values);
        },
        *getUserInfo() {

        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
        }
    }
}