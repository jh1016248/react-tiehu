import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Background extends Component {
    static propTypes = {

    }

    constructor() {
        super()
        this.state = {
            bgIndex: 1,
            pageW: window.innerWidth,
            pageH: window.innerHeight,
            changeBackgroundTimer: null,
        }
    }

    componentDidMount() {
        // this.updateBackground()
    }

    updateBackground() {

    }

    render() {
        return (
            <div className="background" style={{
                backgroundImage: "url(static/images/bg/" + this.state.bgIndex + ".jpg)"
            }}></div>
        )
    }
}

export default Background