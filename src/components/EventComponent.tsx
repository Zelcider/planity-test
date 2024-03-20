import React from 'react';
import {TimeRangeEvent} from "../entities/TimeRangeEvent.ts";
import './Event.css';
import {calendarStart} from "../interface-adapters/CalendarPresenter.tsx";

/**
 * Event component props
 * @param timeRangeEvent The time range event
 * @param height The height of the event
 * @param marginTop The margin top
 */
export interface EventComponentProps {
    timeRangeEvent: TimeRangeEvent;
}

export const EventComponent: React.FC<EventComponentProps> = ({ timeRangeEvent }) => {
    return (
        <div className="event" style={{
            gridRowStart: `${timeRangeEvent.timeRange.start - calendarStart}`,
            gridRowEnd: `${timeRangeEvent.timeRange.end - calendarStart}`,
            marginTop: `${timeRangeEvent.marginTop}px`,
        }}>
             <span
                 className="event-id">{timeRangeEvent.timeRange.start} - {timeRangeEvent.timeRange.end}</span>
            {/*<span*/}
            {/*    className="event-id">{timeRangeEvent.id}</span>*/}
        </div>
    );
};

export default EventComponent;