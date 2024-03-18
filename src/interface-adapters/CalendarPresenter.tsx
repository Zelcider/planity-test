import React from 'react';
import CalendarComponent from "../components/Calendar.component";
import ColumnedEventComponent from '../components/ColumnedEvent.component';
import TimeRangeEventComponent from "../components/TimeRangeEvent.component";
import GroupedEventComponent from "../components/GroupedEvent.component";
import { GroupedEvent } from "../entities/GroupedEvent";
import { TimeRange } from "../entities/TimeRange";
import {TimeRangeEvent} from "../entities/TimeRangeEvent.ts";
import {ColumnedEvent} from "../entities/ColumnedEvent.ts";

const totalMinutesInDay = 24 * 60;

interface CalendarPresenterProps {
    groupedEvents: GroupedEvent[];
}

const CalendarPresenter: React.FC<CalendarPresenterProps> = ({ groupedEvents }) => {
    let calendarStart = 9 * 60; // Starting point of the calendar (9:00 AM)

    function getHeight(timeRange: TimeRange): number {
        return (timeRange.end - timeRange.start) / totalMinutesInDay * 100;
    }

    function getPaddingTop(timeRange: TimeRange, previousEnd = 0): number {
        return (timeRange.start - previousEnd) / totalMinutesInDay * 100;
    }

    interface PreviousColumnEndUpdater {
        current: number;
    }

    const renderTimeRangeEvent = (e: TimeRangeEvent, previousColumnEndUpdater: PreviousColumnEndUpdater) => {
        const eventMarginTop = getPaddingTop(e.timeRange, previousColumnEndUpdater.current);
        previousColumnEndUpdater.current = e.timeRange.end;
        return <TimeRangeEventComponent key={e.id} timeRangeEvent={e} marginTop={eventMarginTop} height={getHeight(e.timeRange)}/>;
    };

    const renderColumnedEvent = (columnedEvent: ColumnedEvent, groupedEventStart: number) => {
        const columnMarginTop = getPaddingTop(columnedEvent.overLappingIndex, groupedEventStart);
        const previousColumnEnd: PreviousColumnEndUpdater = { current: columnedEvent.overLappingIndex.start };
        return (
            <ColumnedEventComponent key={columnedEvent.overLappingIndex.start} marginTop={columnMarginTop}>
                {columnedEvent.events.map(e => renderTimeRangeEvent(e, previousColumnEnd))}
            </ColumnedEventComponent>
        );
    };

    const renderGroupedEvent = (groupedEvent: GroupedEvent) => {
        const groupMarginTop = getPaddingTop(groupedEvent.key, calendarStart);
        calendarStart = groupedEvent.key.end;
        return (
            <GroupedEventComponent key={groupedEvent.key.start} height={getHeight(groupedEvent.key)} marginTop={groupMarginTop}>
                {groupedEvent.events.map(columnedEvent => renderColumnedEvent(columnedEvent, groupedEvent.key.start))}
            </GroupedEventComponent>
        );
    };

    return (
        <CalendarComponent>
            {groupedEvents.map(renderGroupedEvent)}
        </CalendarComponent>
    );
};

export default CalendarPresenter;
