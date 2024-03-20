import React from 'react';
import CalendarComponent from "../components/Calendar.component";
import {OverlappingEventGroup} from "../entities/OverlappingEventGroup.ts";
import OverlappingEventGroupPresenter from "./OverlappingEventGroupPresenter.tsx";


interface CalendarPresenterProps {
    overlappingEventGroups: OverlappingEventGroup[];
    calendarStart: string;
}

const CalendarPresenter: React.FC<CalendarPresenterProps> = ({ overlappingEventGroups, calendarStart }) => {
    let previousElementEnd = parseInt(calendarStart.split(":")[0]) * 60 + parseInt(calendarStart.split(":")[1]);
    return (
        <CalendarComponent>
            {overlappingEventGroups.map(overlappingEventGroup => {
                const result = OverlappingEventGroupPresenter({
                    overlappingEventGroup,
                    previousElementEnd
                });
                previousElementEnd = overlappingEventGroup.key.end;
                return result ;
            })}
        </CalendarComponent>
    );
};

export default CalendarPresenter;
