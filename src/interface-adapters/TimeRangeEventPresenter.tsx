import {TimeRangeEvent} from "../entities/TimeRangeEvent.ts";
import EventComponent from "../components/EventComponent.tsx";
import React from "react";
import {getHeight, getPaddingTop} from "./TimeRangeUtils.ts";

const TimeRangeEventPresenter : React.FC<{e:TimeRangeEvent, previousElementEnd: {current : number}}> = ({e , previousElementEnd}) => {
    const eventMarginTop = getPaddingTop(e.timeRange, previousElementEnd.current);
    const height = getHeight(e.timeRange);
    previousElementEnd.current =  e.timeRange.end; // update the previousElementEnd to the end of the current event
    return <EventComponent key={e.id} timeRangeEvent={e} marginTop={eventMarginTop} height={height}/>;
};

export default TimeRangeEventPresenter;