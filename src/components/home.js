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
                <img src={"img/escape.jpg"} className="bg" />
                <Fade {...fadeProperties}>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={fadeImages[0]} className="bg" />
                        </div>
                        <div className="celebration">
                            <h1>Celebrating 70 Years of</h1>
                        </div>
                        <div className="typeContainer">
                            <div className="typewriter">
                                <h1>excellence.</h1>
                            </div>
                        </div>
                    </div>
                   
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={fadeImages[1]} className="bg" />
                        </div>
                        <div className="celebration">
                            <h1>Celebrating 70 Years of</h1>
                        </div>
                        <div className="typeContainer">
                            <div className="typewriter">
                                <h1>integrity.</h1>
                            </div>
                        </div>
                    </div>

                    <div className="each-fade">
                        <div className="image-container">
                            <img src={fadeImages[2]} className="bg"/>
                        </div>
                        <div className="celebration">
                            <h1>Celebrating 70 Years of</h1>
                        </div>
                        <div className="typeContainer">
                            <div className="typewriter">
                                <h1>excellence.</h1>
                            </div>
                        </div>
                    </div>
                    {this.props.children}
                </Fade>
            </div>
        )
    }
}