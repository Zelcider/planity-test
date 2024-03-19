import {NonOverlappingEventGroup} from "../entities/NonOverlappingEventGroup.ts";
import EventColumnComponent from "../components/EventColumn.component.tsx";
import React from "react";
import TimeRangeEventPresenter from "./TimeRangeEventPresenter.tsx";
import {getPaddingTop} from "./TimeRangeUtils.ts";

export interface NonOverlappingEventGroupPresenterProps {
    nonOverlappingEventGroup: NonOverlappingEventGroup;
    firstEventStart: number;
}

const NonOverlappingEventGroupPresenter :React.FC<NonOverlappingEventGroupPresenterProps>= ({nonOverlappingEventGroup, firstEventStart}) => {
    const {timeRange, events } = nonOverlappingEventGroup;
    const columnMarginTop = getPaddingTop(timeRange, firstEventStart);
    const previousElementEnd = { current: timeRange.start };
    return (
        <EventColumnComponent key={timeRange.start} marginTop={columnMarginTop}>
            {events.map(e => TimeRangeEventPresenter({e, previousElementEnd }))}
        </EventColumnComponent>
    );
};

export default NonOverlappingEventGroupPresenter;