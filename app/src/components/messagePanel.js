import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from './message'
import './styles/messagePanel.less'

class MessagePanel extends Component {
    static propTypes = {
        messageList: PropTypes.array,
    }
    
    constructor(){
        super()
    }

    componentDidUpdate() {
        let wrapEl = this.refs.messageWrap
        let height = wrapEl.scrollHeight
        wrapEl.scrollTop = height
    }

    render() {
        let messageList = this.props.messageList
        return (
            <div className="message-panel" ref="panelWrap">
                <div className="message-wrap mini-scroll" ref="messageWrap">
                    {
                        messageList.length && messageList.map((item, index) => {
                            return (
                                <Message message={item} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default MessagePanel