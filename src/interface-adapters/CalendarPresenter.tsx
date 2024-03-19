import React from 'react';
import CalendarComponent from "../components/Calendar.component";
import {OverlappingEventGroup} from "../entities/OverlappingEventGroup.ts";
import OverlappingEventGroupPresenter from "./OverlappingEventGroupPresenter.tsx";


interface CalendarPresenterProps {
    groupedEvents: OverlappingEventGroup[];
    calendarStart: string;
}

const CalendarPresenter: React.FC<CalendarPresenterProps> = ({ groupedEvents, calendarStart }) => {
    let previousElementEnd = parseInt(calendarStart.split(":")[0]) * 60 + parseInt(calendarStart.split(":")[1]);
    return (
        <CalendarComponent>
            {groupedEvents.map(ge => {
                const result = OverlappingEventGroupPresenter({
                    groupedEvent: ge,
                    previousElementEndUpdater: previousElementEnd
                });
                previousElementEnd = ge.key.end;
                return result ;
            })}
        </CalendarComponent>
    );
};

export default CalendarPresenter;
