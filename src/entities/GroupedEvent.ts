import {isOverlapping, TimeRange} from "./TimeRange.ts";
import {TimeRangeEvent} from "./TimeRangeEvent.ts";
import {ColumnedEvent} from "./ColumnedEvent.ts";

/**
 * Grouped event
 * @param key The group time range
 * @param events The events in the group
 */
export interface GroupedEvent {
    key: TimeRange;
    events: ColumnedEvent[];
}

/**
 * Combine the time range of the group with the event
 * @param group The group to combine the event with
 * @param event The event to combine with the group
 * @returns The combined time range
 */
function CombineTimeRange(group: GroupedEvent, event: TimeRangeEvent): TimeRange {
    return {
        start : Math.min(group.key.start, event.timeRange.start),
        end : Math.max(group.key.end, event.timeRange.end)
    };
}

/**
 * Update the group with the new event
 * @param group The group to update
 * @param event The event to add to the group
 */
export function updateGroup(group: GroupedEvent, event: TimeRangeEvent) : void {
    group.key = CombineTimeRange(group, event);
    const column = group.events.find(c => !c.events.some(e => isOverlapping(e.timeRange, event.timeRange)));
    column ? column.events.push(event) : group.events.push({overLappingIndex: event.timeRange, events :[event]});
}


/**
 * Create a new group with the event
 * @param event The event to create the group with
 * @returns The new group
 */
export function createNewGroup(event: TimeRangeEvent): GroupedEvent {
    return { key: event.timeRange, events: [{overLappingIndex:event.timeRange, events :[{id: event.id, timeRange: event.timeRange}] }] };
}