import {TimeRangeEvent} from "./TimeRangeEvent.ts";
import {isOverlapping, TimeRange} from "./TimeRange.ts";

/**
 * Represents a group of events where no event overlaps with any other event within the group.
 * @param timeRange The group time range
 * @param events The events in the group
 */
export interface NonOverlappingEventGroup {
    timeRange: TimeRange;
    events: TimeRangeEvent[];
}

/**
 * Create a new non overlapping event group with the event
 * @param event The event to create the group with
 * @returns The new non overlapping group
 */
export function createNonOverlappingEventGroup(event: TimeRangeEvent): NonOverlappingEventGroup {
    return {timeRange: event.timeRange, events: [event]};
}

/**
 * Find the non overlapping event group for the event
 * @param groups The non overlapping event groups to search
 * @param event The event to search for
 * @returns The non overlapping event group if found, undefined otherwise
 */
export function findNonOverlappingEventGroup(groups: NonOverlappingEventGroup[], event: TimeRangeEvent): NonOverlappingEventGroup | undefined {
    return groups
        .find(nonOverlappingGroup => nonOverlappingGroup.events.every(e => !isOverlapping(e.timeRange, event.timeRange)));
}