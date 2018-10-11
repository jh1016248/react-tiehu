import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, hashHistory } from 'react-router'
import { Button, Icon } from 'antd';
const ButtonGroup = Button.Group;


class ForumItem extends Component {
    static propTypes = {
        item: PropTypes.object
    }
    
    constructor(){
        super()
    }

    toDetail() {
        hashHistory.push('/detial/' + this.props.item.id)
    }
    
    render() {
        let item = this.props.item;
        return (
            <div className="timeline-item p15 bbe" onClick={this.toDetail.bind(this)}>
                <div className="info">
                    <div className="user-popover-box mb5">
                        <span>{item.creatorUserName}</span>
                        <span>{item.date}</span>
                    </div>
                    <div className="info-row ell mb10">{item.title}</div>
                    <div className="action-row">
                        <ButtonGroup>
                            <Button type="default"><Icon type="like" />12</Button>
                            <Button type="default"><Icon type="message" />33</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div className="thumb" style={{background: 'url(https://user-gold-cdn.xitu.io/2018/10/7/1664d652f0c73458?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1) center center no-repeat'}}></div>
            </div>
        )
    }
}

export default ForumItem