import {TimeRangeEvent} from "./TimeRangeEvent.ts";
import {TimeRange} from "./TimeRange.ts";

/**
 * Columned event
 * @param overLappingIndex The overlapping time range
 * @param events The events in the column
 */
export interface ColumnedEvent {
    overLappingIndex: TimeRange;
    events: TimeRangeEvent[];
}