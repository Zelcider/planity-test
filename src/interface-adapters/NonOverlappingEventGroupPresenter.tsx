import {NonOverlappingEventGroup} from "../entities/NonOverlappingEventGroup.ts";
import EventColumnComponent from "../components/EventColumn.component.tsx";
import React from "react";
import TimeRangeEventPresenter from "./TimeRangeEventPresenter.tsx";

export interface NonOverlappingEventGroupPresenterProps {
    nonOverlappingEventGroup: NonOverlappingEventGroup;
    indexGroup: number;
}

const NonOverlappingEventGroupPresenter :React.FC<NonOverlappingEventGroupPresenterProps>= ({nonOverlappingEventGroup, indexGroup}) => {
    const {timeRange, events } = nonOverlappingEventGroup;
    return (
        <EventColumnComponent key={timeRange.start} indexGroup={indexGroup}>
            {events.map(e => TimeRangeEventPresenter({e}))}
        </EventColumnComponent>
    );
};

export default NonOverlappingEventGroupPresenter;