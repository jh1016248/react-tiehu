import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import './styles/chatPanelHeader.less'

class ChatPanelHeader extends Component {
    static propTypes = {

    }
    
    constructor(){
        super()
    }
    
    render() {
        return (
            <div className="chat-panel-header">
                <div>
                    <img src="static/images/avatar/1.jpg" />
                    <h3>哈哈哈</h3>
                </div>
                <div>
                    <a href=""><Icon type="notification" title="公告" style={{fontSize: '30px', color: '#376282', marginRight: '10px'}}/></a>
                    <a href=""><Icon type="contacts" title="人们" style={{fontSize: '30px', color: '#376282'}}/></a>
                </div>
            </div>
        )
    }
}

export default ChatPanelHeader