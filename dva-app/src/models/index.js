import * as indexServices from '../services/index';

export default {
    namespace: 'index',
    state: {
        articleList: [],
    },
    reducers: {
        saveArticle(state, { payload: { list } }) {
            return {
                ...state,
                articleList: list
            }
        }
    },
    effects: {
        *getArticle({ payload: { pageIndex } }, { put, call, select }) {
            const res = yield call(indexServices.getArticle, { pageIndex })
            if(res.code === 1000) {
                yield put({
                    type: 'saveArticle',
                    payload: { list: res.data }
                })
            }
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if(pathname === '/') {
                    dispatch({
                        type: 'getArticle',
                        payload: {
                            pageIndex: 1,
                        }
                    })
                }
            })
        }
    }
}