import {OverlappingEventGroup} from "../entities/OverlappingEventGroup.ts";
import NonOverlappingEventGroupPresenter from "./NonOverlappingEventGroupPresenter.tsx";
import React from "react";
import EventRowComponent from "../components/EventRow.component.tsx";


export interface OverlappingEventGroupPresenterProps {
    overlappingEventGroup: OverlappingEventGroup;
}

const OverlappingEventGroupPresenter : React.FC<OverlappingEventGroupPresenterProps> = ({overlappingEventGroup}) => {
    const {key, nonOverlappingEventGroups} = overlappingEventGroup;

    return (
        <EventRowComponent key={key.start} rowStart={key.start} rowEnd={key.end}>
            {nonOverlappingEventGroups.map((nonOverlappingEventGroup, index) =>
                NonOverlappingEventGroupPresenter({nonOverlappingEventGroup: nonOverlappingEventGroup,indexGroup: index  }) )}
        </EventRowComponent>
    );
};

export default OverlappingEventGroupPresenter;