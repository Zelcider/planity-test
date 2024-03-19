import {CombineTimeRange, TimeRange} from "./TimeRange.ts";
import {TimeRangeEvent} from "./TimeRangeEvent.ts";
import {
    createNonOverlappingEventGroup,
    findNonOverlappingEventGroup,
    NonOverlappingEventGroup
} from "./NonOverlappingEventGroup.ts";

/**
 * Represents a group of events where at least one event overlaps with another event within the group.
 * @param key The overlapping time range of all the events in the group
 * @param nonOverLappingEventGroup The non overlapping event groups
 */
export interface OverlappingEventGroup {
    key: TimeRange;
    nonOverlappingEventGroups: NonOverlappingEventGroup[];
}

/**
 * Update the overlapping event group with the event
 * @param group The overlapping event group to update
 * @param event The event to add to the overlapping event group
 */
export function updateOverlappingEventGroup(group: OverlappingEventGroup, event: TimeRangeEvent) : void {
    group.key = CombineTimeRange(group.key, event.timeRange); // Update the key
    const nonOverlappingGroup = findNonOverlappingEventGroup(group.nonOverlappingEventGroups, event);
    nonOverlappingGroup
        ? nonOverlappingGroup.events.push(event)
        : group.nonOverlappingEventGroups.push(createNonOverlappingEventGroup(event));
}


/**
 * Create a new overlapping event group with the event
 * @param event The event to create the group with
 * @returns The new overlapping group
 */
export function createOverlappingEventGroup(event: TimeRangeEvent): OverlappingEventGroup {
    return { key: event.timeRange, nonOverlappingEventGroups: [{timeRange:event.timeRange, events :[{id: event.id, timeRange: event.timeRange}] }] };
}