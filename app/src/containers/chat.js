import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Chat from '../components/chat'

class ChatContainer extends Component {
    static propTypes = {
        user: PropTypes.object,
        addMessage: PropTypes.func,
    }

    constructor() {
        super()
    }

    handelSubmitMessage(msg) {
        let user = this.props.user
        let d = new Date()
        let host = false
        if(d.getSeconds() % 2 == 1) {
            host = true
        }
        
        if(msg.length == 0) {
            return false
        }

        let messageItem = {
            type: 'text',
            host: host,
            id: user.id,
            name: user.nickName,
            content: msg,
            avatar: user.avatar,
            time: d.getHours() + ':' + d.getMinutes()
        }
        this.props.addMessage(messageItem)
    }

    render() {
        return (
            <Chat handelSubmitMessage={this.handelSubmitMessage.bind(this)}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMessage: item => {
            dispatch({
                type: 'ADD_MESSAGE',
                item
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatContainer)