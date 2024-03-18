import {TimeRange} from "./TimeRange.ts";

/**
 * Event interface
 * @param id The event id
 * @param timeRange The event time range
 */
export interface TimeRangeEvent{
    id: number;
    timeRange: TimeRange;
}

