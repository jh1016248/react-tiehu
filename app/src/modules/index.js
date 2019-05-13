import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Aside from '../components/aside'
import ForumItem from '../components/forumItem'
import { Row, Col } from 'antd';


import './styles/index.less'

class Index extends Component {
    static propTypes = {
        user: PropTypes.object
    }

    constructor() {
        super()
        this.state = {
            articleList: [],
        }
    }

    componentWillMount() {
        if (!this.props.user.id) {
            hashHistory.push('/')
        }
        this.getArticalList();
    }

    getArticalList() {
        let params = {
            forumId: 1,
            pageIndex: 1,
            pageSize: 5
        }
        $client.getData($client.API.getArticleList, params).then(res => {
            this.setState({
                articleList: res.data
            })
        })
    }

    render() {
        return (
            <div className="container">
                <Header user={this.props.user} />

                <div className="wrap mt20 main-container">
                    <Row>
                        <Col span={17}>
                            <div className="timeline-list-entry bde">
                                <div className="timeline-header bbe pl20">
                                    <span className="mr10 blue">热门</span>
                                    <span className="mr10">最新</span>
                                    <span className="mr10">评论</span>
                                </div>
                                <div className="timeline-list">
                                    {
                                        (
                                            this.state.articleList.map(item => {
                                                return (<ForumItem key={item.id} item={item} />)
                                            })
                                        )
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col span={6} offset={1}>
                            {/* <Aside user={this.props.user} className="bde" /> */}
                        </Col>
                    </Row>
                </div>
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
