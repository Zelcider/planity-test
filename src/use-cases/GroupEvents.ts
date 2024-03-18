import {computeTimeRange, isOverlapping} from "../entities/TimeRange.ts";
import {TimeRangeEvent} from "../entities/TimeRangeEvent.ts";
import {createNewGroup, GroupedEvent, updateGroup} from "../entities/GroupedEvent.ts";
import {EventDto} from "../entities/EventDto.ts";

/**
 * Group events by overlapping time
 * @param events The events to group
 * @returns The grouped events
 */
export function GroupEvents(events: EventDto[]): GroupedEvent[] {
    return events.map(e => ({id: e.id, timeRange: computeTimeRange(e.start,e.duration)} as TimeRangeEvent))
        .sort((a, b) => a.timeRange.start - b.timeRange.start)
        .reduce<GroupedEvent[]>((acc, event) => {
            const group = acc.find(g => isOverlapping(g.key, event.timeRange));
            group ? updateGroup(group, event) : acc.push(createNewGroup(event));
            return acc;
        }, []);
}