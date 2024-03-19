import React from 'react';
import {TimeRangeEvent} from "../entities/TimeRangeEvent.ts";
import './Event.css';

/**
 * Event component props
 * @param timeRangeEvent The time range event
 * @param height The height of the event
 * @param marginTop The margin top
 */
export interface EventComponentProps {
    timeRangeEvent: TimeRangeEvent;
    height: number;
    marginTop: number;
}



export const EventComponent: React.FC<EventComponentProps> = ({ timeRangeEvent, height, marginTop }) => {
    return (
        <div className="event" style={{marginTop: `${marginTop}vh`, height: `${height}vh`}}>
            <span
                className="event-id">{timeRangeEvent.id}</span>
        </div>
    );
};

export default EventComponent;