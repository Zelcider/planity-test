import {OverlappingEventGroup} from "../entities/OverlappingEventGroup.ts";
import GroupedEventComponent from "../components/GroupedEvent.component.tsx";
import NonOverlappingEventGroupPresenter from "./NonOverlappingEventGroupPresenter.tsx";
import React from "react";
import {getHeight, getPaddingTop} from "./TimeRangeUtils.ts";


export interface OverlappingEventGroupPresenterProps {
    overlappingEventGroup: OverlappingEventGroup;
    previousElementEnd: number;
}

const OverlappingEventGroupPresenter : React.FC<OverlappingEventGroupPresenterProps> = ({overlappingEventGroup, previousElementEnd}) => {
    const {key, nonOverlappingEventGroups} = overlappingEventGroup;
    const groupMarginTop = getPaddingTop(key, previousElementEnd);
    const height = getHeight(key);

    return (
        <GroupedEventComponent key={key.start} height={height} marginTop={groupMarginTop}>
            {nonOverlappingEventGroups.map(nonOverlappingEventGroup =>
                NonOverlappingEventGroupPresenter({nonOverlappingEventGroup: nonOverlappingEventGroup, firstEventStart: key.start }) )}
        </GroupedEventComponent>
    );
};

export default OverlappingEventGroupPresenter;