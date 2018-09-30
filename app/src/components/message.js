import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'antd'
import './styles/message.less'

class Message extends Component {
    static propTypes = {
        message: PropTypes.object
    }

    constructor() {
        super()
    }

    render() {
        const message = this.props.message
        return (
            <div className={ message.host ? 'message host' : 'message' }>
                <img src={ message.avatar } />
                <div>
                    <p>{message.nickName + ' ' + message.time}</p>
                    <div className="message-content">
                        {message.content}
                    </div>
                </div>
            </div>
        )
    }
}


export default Message