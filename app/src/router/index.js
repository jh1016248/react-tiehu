import React, { render } from 'react'
import { Router, IndexRoute, Link, Route, hashHistory } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Index from '../modules/index'
import Register from '../modules/register'
import Login from '../modules/login'
import { message } from 'antd';
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
					<Route path="/login" component={Login}></Route>
					<Route path="/register" component={Register}></Route>
					<Route path="/main" component={Index}></Route>
				</Route>
			</Router>
		)
	}
}

export default router