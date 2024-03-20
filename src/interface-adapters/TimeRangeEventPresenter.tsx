import {TimeRangeEvent} from "../entities/TimeRangeEvent.ts";
import EventComponent from "../components/EventComponent.tsx";
import React from "react";

const TimeRangeEventPresenter : React.FC<{e:TimeRangeEvent}> = ({e }) => {
    return <EventComponent key={e.id} timeRangeEvent={e}/>;
};

export default TimeRangeEventPresenter;