import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/aside.less'

class Aside extends Component {
    static propTypes = {
        
    }
    
    constructor() {
        super()
    }

    render() {
        return (
            <div className="chat-list">
                <div className="chat-list-item active">
                    <img src="static/images/avatar/1.jpg" />
                    <h4><span>12:12</span>聊天名称</h4>
                    <p>jh:哈哈哈</p>
                </div>
                <div className="chat-list-item">
                    <img src="static/images/avatar/1.jpg" />
                    <h4><span>12:12</span>聊天名称</h4>
                    <p>jh:哈哈哈</p>
                </div>
            </div>
        )
    }
}


export default Aside