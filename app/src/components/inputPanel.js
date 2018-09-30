import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import './styles/inputPanel.less'

class InputPanel extends Component {
    static propTypes = {
        handelSubmitMessage: PropTypes.func
    }
    
    constructor(){
        super()
    }

    handelEnter() {
        let msg = this.refs.message.refs.input.value
        this.refs.message.refs.input.value = ''
        this.props.handelSubmitMessage(msg)
    }
    
    render() {
        return (
            <div className="input-panel">
                <Input placeholder="说点什么吧,按下回车发送消息" ref="message" size="large" onPressEnter={this.handelEnter.bind(this)}/>
            </div>
        )
    }
}

export default InputPanel