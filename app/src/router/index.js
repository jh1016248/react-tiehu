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
        this.state = {
            bgIndex: 1,
            pageW: 0, 
            pageH: 0,
            changeBackgroundTimer: null,
        }
    }

    updateBackground() {
        let pageW = window.outerWidth,
            pageH = window.outerHeight,
            bgIndex = 8
            // bgIndex = Math.floor((Math.random() * 4) + 1)
        this.setState({
            // bgIndex,
            pageW,
            pageH,
            // changeBackgroundTimer: setTimeout(() => {
            //     this.updateBackground()
            // }, 30 * 1000)
        })
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
        this.updateBackground()
    }

    componentWillUnMount() {
        clearTimeout(this.state.changeBackgroundTimer)
    }

	render() {
		return (
			<div>
                {/* <div className="background" style={{
                    backgroundImage: "url(static/images/bg/" + this.state.bgIndex + ".jpg)", 
                    backgroundSize: this.state.pageW + 'px ' + this.state.pageH + 'px',
                }}></div> */}
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