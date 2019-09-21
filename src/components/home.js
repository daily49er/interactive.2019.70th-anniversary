import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
 
const fadeImages = [
  'img/escape.jpg',
  'img/flower.jpg',
  'img/open.jpg',
  'img/people.jpg',
  'img/standing.jpg',
];

const fadeProperties = {
    duration: 3700,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
        console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
}

export default class EventsList extends Component {
    render() {
        return (
            <div className="home-dashboard">
                {/* <img src={"img/escape.jpg"} className="bg" />
                {this.props.children} */}
                <Fade {...fadeProperties}>
                    <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[0]} className="bg" />
                    </div>
                    <h2>First Slide</h2>
                    </div>
                    <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[1]} className="bg" />
                    </div>
                    <h2>Second Slide</h2>
                    </div>
                    <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[2]} className="bg"/>
                    </div>
                    <h2>Third Slide</h2>
                    </div>
                </Fade>
                {this.props.children}
            </div>
        )
    }
}