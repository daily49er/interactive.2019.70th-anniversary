import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import Typist from 'react-typist';
 
const fadeImages = [
  'img/palms.jpg',
  'img/flower.jpg',
  'img/open.jpg',
  'img/people.jpg',
  'img/standing.jpg',
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
                {/* <img src={"img/escape.jpg"} className="bg" />
                {this.props.children} */}
                {/* <Fade {...fadeProperties}> */}
                    {/* <div className="each-fade"> */}
                    <div className="image-container">
                        <img src={fadeImages[0]} className="bg" />
                    </div>
                  
                    
                <div className="celebration">
                   <div className = "backspace">
                        <p> Celebrating</p>
                        <p>70 Years</p>
                        {/*
                        <Typist cursor={{ show: true }}>
                            
                            <span>Quality</span>
                            <Typist.Backspace count={7} delay={1000} />
                            <span>Excellence</span>
                            <Typist.Backspace count={10} delay={1000} />
                            <span>Integrity</span>
                            
                        </Typist>
                        */}
                    </div>
                </div>
                   
                    {/* <h2>Quality</h2>
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
                    </div> */} 
                {/* </Fade> */}
                {this.props.children}
            </div>
        )
    }
}