import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './styles/index.less'

class Detail extends Component {
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
        this.getArticalList();
    }

    getArticalList() {
        // let params = {
        //     forumId: 1,
        //     pageIndex: 1,
        //     pageSize: 5
        // }
        // $client.getData($client.API.getArticleList, params).then(res => {
        //     this.setState({
        //         articleList: res.data
        //     })
        // })
    }

    render() {
        return (
            <div className="container">
                <div className="wrap mt20 main-container">
                    
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

export default connect(mapStateToProps)(Detail)
