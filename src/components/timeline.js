import React from 'react';
import timelineData from './Data';
import TimelineItem from './TimelineItem';

// const Timeline = () =>
//     timelineData.length > 0 && (
//         <div className="timeline-container">
//             {timelineData.map((data, idx) => (
//                 <TimelineItem data={data} key={idx} />
//             ))}
//         </div>
//     );

function Timeline(props) {
    const events = timelineData.map((event) =>
        <li key={event.date}>
         {event.text}
        </li>
    );
    return (
      <ul>{events}</ul>
    );
  }

export default Timeline;