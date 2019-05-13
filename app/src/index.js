import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Root from './root'
import reducer from './reducer/index'
import $client from '../common/utils/index'
window.$client = $client;

import '../common/styles/index.less';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <AppContainer>
            <Root />
        </AppContainer>
    </Provider>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./root', () => {
        const NewRoot = require('./root').default
        render(
            <Provider store={store}>
                <AppContainer>
                    <NewRoot />
                </AppContainer>
            </Provider>,
            document.getElementById('root')
        )
    })
}
