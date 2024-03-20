import React from 'react';
import CalendarComponent from "../components/Calendar.component";
import {OverlappingEventGroup} from "../entities/OverlappingEventGroup.ts";
import OverlappingEventGroupPresenter from "./OverlappingEventGroupPresenter.tsx";


interface CalendarPresenterProps {
    overlappingEventGroups: OverlappingEventGroup[];
}

export const calendarStart = 9*60; // 9:00

const CalendarPresenter: React.FC<CalendarPresenterProps> = ({ overlappingEventGroups }) => {
    return (
        <CalendarComponent>
            {overlappingEventGroups.map((overlappingEventGroup) =>
                OverlappingEventGroupPresenter({
                    overlappingEventGroup,
                }))}
        </CalendarComponent>
    );
};

export default CalendarPresenter;
