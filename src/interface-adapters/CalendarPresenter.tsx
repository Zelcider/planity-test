import React from 'react';
import CalendarComponent from "../components/Calendar.component.tsx";
import ColumnedEventComponent from '../components/ColumnedEvent.component.tsx';
import TimeRangeEventComponent from "../components/TimeRangeEvent.component.tsx";
import GroupedEventComponent from "../components/GroupedEvent.component.tsx";
import {GroupedEvent} from "../entities/GroupedEvent.ts";
import {TimeRange} from "../entities/TimeRange.ts";

const totalMinutesInDay = 24 * 60;

const CalendarPresenter: React.FC<{ groupedEvents: GroupedEvent[] }> = ({ groupedEvents }) => {
    let calendarStart = 9 * 60; // Starting point of the calendar (9:00 AM)

    function getHeight(timeRange: TimeRange) {
        return (timeRange.end - timeRange.start) / totalMinutesInDay * 100;
    }

    function getPaddingTop(timeRange: TimeRange, previousEnd = 0) {
        return (timeRange.start - previousEnd) / totalMinutesInDay * 100;
    }

    return (
        <CalendarComponent>
            {groupedEvents.map(groupedEvent => {
                const groupMarginTop = getPaddingTop(groupedEvent.key, calendarStart);
                calendarStart = groupedEvent.key.end;
                return (
                    <GroupedEventComponent key={groupedEvent.key.start} height={getHeight(groupedEvent.key)} marginTop={groupMarginTop}>
                        {groupedEvent.events.map(columnedEvent => {
                            const columnMarginTop = getPaddingTop(columnedEvent.overLappingIndex, groupedEvent.key.start);
                            let previousColumnEnd = columnedEvent.overLappingIndex.start;
                            return (
                                <ColumnedEventComponent key={columnedEvent.overLappingIndex.start} marginTop={columnMarginTop}>
                                    {columnedEvent.events.map(e => {
                                        const eventMarginTop = getPaddingTop(e.timeRange, previousColumnEnd);
                                        previousColumnEnd = e.timeRange.end;
                                        return <TimeRangeEventComponent key={e.id} timeRangeEvent={e} marginTop={eventMarginTop} height={getHeight(e.timeRange)}/>;
                                    })}
                                </ColumnedEventComponent>
                            );
                        })}
                    </GroupedEventComponent>
                );
            })}
        </CalendarComponent>
    );
};

export default CalendarPresenter;