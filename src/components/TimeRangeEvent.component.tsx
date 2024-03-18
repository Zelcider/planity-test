import React from 'react';
import {TimeRangeEvent} from "../entities/TimeRangeEvent.ts";

const TimeRangeEventComponent: React.FC<{ timeRangeEvent : TimeRangeEvent  }> = ({ timeRangeEvent }) => {
    return (
        <div>
            <h2>Event {timeRangeEvent.id}</h2>
            <p>Start: {timeRangeEvent.timeRange.start}</p>
            <p>End: {timeRangeEvent.timeRange.end}</p>
        </div>
    );
};

export default TimeRangeEventComponent;