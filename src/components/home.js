import React, { Component } from 'react';


export default class EventsList extends Component {
    render() {
        return (
            <div className="home-dashboard">
                <img src={"img/escape.jpg"} className="bg" />
                {this.props.children}
            </div>
        )
    }
}