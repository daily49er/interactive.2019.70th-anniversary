import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
 
const fadeImages = [
  'img/football.png',
  'img/band.jpg',
  'img/khmer.jpg',
  'img/old_soroptimist.jpg',
  'img/parking.png',
  'img/womensstudies.png',
];

const traits = [
    'News',
    'Integrity',
    'Excellence', 
    'Boldness'
];

const fadeProperties = {
    duration: 5000,
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
                <div className="celebration">
                    <h1>Celebrating</h1>
                    <center><h1>70 Years</h1></center>
                </div>
                <Fade {...fadeProperties}>
                    <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[0]} className="bg" />
                    </div>
                    </div>
                    <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[1]} className="bg" />
                    </div>
                    </div>
                    <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[2]} className="bg"/>
                    </div>
                    </div>
                    <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[3]} className="bg"/>
                    </div>
                    </div>
                    <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[4]} className="bg"/>
                    </div>
                    </div>
                    <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[5]} className="bg"/>
                    </div>
                    </div>
                </Fade>
                {this.props.children}
            </div>
        )
    }
}