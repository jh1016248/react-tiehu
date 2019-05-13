import React, { render } from 'react'
import { Router, IndexRoute, Link, Route, hashHistory } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Index from '../modules/index'

import { message } from 'antd';
import routers from './routers';
import Detail from '../modules/detail';

class App extends React.Component {
    static propTypes = {
        user: PropTypes.object,
        setUserInfo: PropTypes.func,
    }
	constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        let token = localStorage.token;
        if(token && token != '') {
            $client.getData($client.API.getCurrentUser).then(res => {
                if(res.code == 1000) {
                    this.props.setUserInfo(res.data)
                    hashHistory.push('/main')
                }
                else{
                    message.info(res.message);
                    hashHistory.push('/login')
                }
            })
        }
        else{
            hashHistory.replace('/login')
        }
        // this.updateBackground()
    }

    componentWillUnMount() {
        clearTimeout(this.state.changeBackgroundTimer)
    }

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}
let mapStateToProps = state => {
    return {
    }
}

let mapDispatchToProps = dispatch => {
    return {
        setUserInfo: (user) => {
            dispatch({
                type: 'SET_USER_INFO',
                user
            })
        }
    }
}
let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

class router extends React.Component {
	constructor(props) {
		super(props)
    }
    
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={AppContainer}>
					<IndexRoute component={Index} />
                    {
                        routers.map((item, index) => {
                            return (
                                <Route path={item.path} key={index} component={item.component}></Route>
                            )
                        })
                    }
				</Route>
			</Router>
		)
	}
}

export default router