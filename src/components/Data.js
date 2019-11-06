import React, {Component} from 'react';
import Timeline from './Timeline';
import TimelineItem from './TimelineItem'
import '../data.css'
import { black } from 'ansi-colors';





class Data extends Component {
    render() {
        const timelineData = [
            {
                text: 'hello',
                date: 'March 03 2019',
                category: {
                    tag: 'old', 
                    color: '#018f69'
                },
                link: {
                    url: 'shangsan.me',
                    text: 'click here'
                }
            }, 
            {
                text: 'test',
                date: 'March 04 2019',
                category: {
                    tag: 'old', 
                    color: '#018f69'
                },
                link: {
                    url: 'shangsan.me',
                    text: 'click here'
                }
            }
        ];

        const events = timelineData.map((event) => 
            // <li key = {event.date}>{event.text}</li>
            <div className="timeline-item">
                <div className="timeline-item-content">
                    <span className="tag" style={{ background: event.category.color }}>
                        {event.category.tag}
                    </span>
                    <time>{event.date}</time>
                    <p>{event.text}</p>
                    {event.link && (
                        <a
                            href={event.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {event.link.text}
                        </a>
                    )}
                    <span className="circle" />
                </div>
            </div>
        );
        
        return (
            
            <div className="Data">
                <h3>Timeline</h3>
                {/* <Timeline data={this.state.timelineData}/> */}
                <div className="timeline-container">
                    {events}
                    {/* <Timeline events = {this.state.timelineData}/>
                    <div className="timeline-item">
                        <div className="timeline-item-content">
                            <span className="tag" style={{ background: black }}>
                                {"wow"}
                            </span>
                            <time>{"October 10, 2019"}</time>
                            <p>{"Hello world"}</p>
                            <span className="circle" />
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Data;