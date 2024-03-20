import {OverlappingEventGroup} from "../entities/OverlappingEventGroup.ts";
import NonOverlappingEventGroupPresenter from "./NonOverlappingEventGroupPresenter.tsx";
import React from "react";
import {getHeight, getPaddingTop} from "./TimeRangeUtils.ts";
import EventRowComponent from "../components/EventRow.component.tsx";


export interface OverlappingEventGroupPresenterProps {
    overlappingEventGroup: OverlappingEventGroup;
    previousElementEnd: number;
}

const OverlappingEventGroupPresenter : React.FC<OverlappingEventGroupPresenterProps> = ({overlappingEventGroup, previousElementEnd}) => {
    const {key, nonOverlappingEventGroups} = overlappingEventGroup;
    const groupMarginTop = getPaddingTop(key, previousElementEnd);
    const height = getHeight(key);

    return (
        <EventRowComponent key={key.start} height={height} marginTop={groupMarginTop}>
            {nonOverlappingEventGroups.map(nonOverlappingEventGroup =>
                NonOverlappingEventGroupPresenter({nonOverlappingEventGroup: nonOverlappingEventGroup, firstEventStart: key.start }) )}
        </EventRowComponent>
    );
};

export default OverlappingEventGroupPresenter;