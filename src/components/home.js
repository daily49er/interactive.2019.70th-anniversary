import React, { Component } from "react";
import { Fade } from "react-slideshow-image";
import Button from 'react-bootstrap/Button';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

const fadeImages = [
    "img/football.jpg",
    "img/band_football.jpg",
    "img/old_soroptimist.jpg",
    "img/parking.jpg",
    "img/soccer.jpg",
    "img/womensstudies.jpg",
    "img/long-beach-state-college-sign.jpg",
];

const traits = ["Accuracy", "Accountability", "Transparency", "Objectivity", "Truth", "Honesty", "Integrity", "Excellence", "Boldness"];

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
    state = {
        typing: true,
    }
    done = () => {
        this.setState({typing: false}, () => {
            this.setState({typing: true})
        });
    }
    render() {
        return (
            <div className="home-dashboard">
                <div className="celebration">
                    <h1>Celebrating 70 Years of <div className="traits">{this.state.typing ? <Typist
              onTypingDone={this.done}
            >
                {traits.map(word => ([
                    <span>{word}</span>,
                    <Typist.Backspace count={word.length} delay={2000} />,
                ]))}
            </Typist> : ""}</div></h1>

            <center>
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
