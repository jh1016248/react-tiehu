import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon, Popover } from 'antd'
import { Link } from 'react-router'
import './styles/header.less'

class Header extends Component {
    static propTypes = {
        user: PropTypes.object
    }
    constructor() {
        super()
    }
    render() {
        let content = (
            <div>213123</div>
        )
        return (
            <div className="header">
                <div className="wrap">
                    <Link to="/main" className="logo dib pt10"><img src={ require('../asset/logo.png') } /></Link>
                    <div className="user-pannel " style={{float: 'right'}}>
                        <Link className="bell"><Icon type="bell" className="mr15" style={{color: '#333', fontSize: "20px"}}/></Link>
                        <Popover placement="rightBottom" title="adawdw" content={content} trigger="click">
                            <Link to="/login" className="avatar"><img src={this.props.user.avatar} title={this.props.user.nickName}/></Link>
                        </Popover>
                        
                    </div>
                </div>
            </div>
        )
    }
}


export default Header