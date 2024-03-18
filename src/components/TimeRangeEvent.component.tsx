import React from 'react';
import {TimeRangeEvent} from "../entities/TimeRangeEvent.ts";
import './TimeRangeEvent.css';

/**
 * Time range event component properties
 */
export interface TimeRangeEventComponentProps {
    timeRangeEvent: TimeRangeEvent;
    height: number;
    marginTop: number;
}

/**
 * Time range event component
 * @param timeRangeEvent The time range event
 * @param height The height of the event
 * @param marginTop The margin top of the event
 */
export const TimeRangeEventComponent: React.FC<TimeRangeEventComponentProps> = ({ timeRangeEvent, height, marginTop }) => {
    return (
        <div className="time-range-event" style={{marginTop: `${marginTop}vh`, height: `${height}vh`}}>
            <span
                className="time-range">{displayHourMinutes(timeRangeEvent.timeRange.start)} - {displayHourMinutes(timeRangeEvent.timeRange.end)}</span>
        </div>
    );
};

function displayHourMinutes(minutes: number): string {
 return `${Math.floor(minutes / 60).toString().padStart(2, '0')}:${(minutes % 60).toString().padStart(2, '0')}`;
}

export default TimeRangeEventComponent;