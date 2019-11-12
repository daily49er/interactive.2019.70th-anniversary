import React, { Component } from "react";
import { Fade } from "react-slideshow-image";
import Button from 'react-bootstrap/Button'

const fadeImages = [
    "img/football.jpg",
    "img/band_football.jpg",
    "img/old_soroptimist.jpg",
    "img/parking.jpg",
    "img/womensstudies.jpg"
];

const traits = ["News", "Integrity", "Excellence", "Boldness"];

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
        console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
};

export default class EventsList extends Component {
    render() {
        return (
            <div className="home-dashboard">
                <div className="celebration">
                    <h1>Celebrating</h1>
                    <center>
                        <h1>70 Years</h1>
                         <Button variant="outline-light" href="/timeline">Explore the Timeline</Button>
                    </center>
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
                            <img src={fadeImages[2]} className="bg" />
                        </div>
                    </div>

                    <div className="each-fade">
                        <div className="image-container">
                            <img src={fadeImages[3]} className="bg" />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={fadeImages[4]} className="bg" />
                        </div>
                    </div>
                </Fade>

                {this.props.children}
            </div>
        );
    }
}
