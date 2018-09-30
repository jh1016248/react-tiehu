import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Aside from '../components/aside'
import Chat from '../containers/chat'

import './styles/index.less'

class Index extends Component {
    static propTypes = {
        user: PropTypes.object
    }

    constructor() {
        super()
    }

    componentWillMount() {
        console.log(this.props.user)
        if(!this.props.user.id) {
            hashHistory.push('/')
        }
    }

    render() {
        let user = this.props.user
        return (
            <div className="container">
                <Header user={this.props.user}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}


export default connect(mapStateToProps)(Index)
