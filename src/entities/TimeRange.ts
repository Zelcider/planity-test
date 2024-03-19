/**
 * TimeRange interface
 * @param start The start time in minutes from 00:00
 * @param end The end time in minutes from 00:00
 */
export interface TimeRange {
    start: number;
    end: number;
}

/**
 * Check if two time ranges are overlapping
 * @param timeRange1 {TimeRange} - The first time range to check.
 * @param timeRange2 {TimeRange} - The second time range to check.
 * @returns {boolean} - Returns true if the time ranges overlap, false otherwise.
 */
export function isOverlapping(timeRange1: TimeRange, timeRange2: TimeRange): boolean {
    return timeRange1.start < timeRange2.end && timeRange1.end > timeRange2.start;
}

/**
 * Compute the time range from a start time and a duration
 * @param start - The start time in HH:MM format
 * @param duration - The duration in minutes
 * @throws {Error} - Throws an error if the hour or minute is invalid
 * @returns The time range
 */
export function computeTimeRange(start: string, duration: number): TimeRange {
    const [hours, minutes] = start.split(':').map(Number);
    if (hours < 0 || hours > 23 ) throw new Error('Invalid hour');
    if (minutes < 0 || minutes > 59) throw new Error('Invalid minute');
    const startMinutes = hours * 60 + minutes;
    const endMinutes = startMinutes + duration;
    return { start: startMinutes, end: endMinutes };
}

/**
 * Combine two time ranges
 * @param timeRange1 The first time range
 * @param timeRange2 The second time range
 * @returns The combined time range
 */
export function CombineTimeRange(timeRange1: TimeRange, timeRange2: TimeRange): TimeRange {
    return {
        start : Math.min(timeRange1.start, timeRange2.start),
        end : Math.max(timeRange1.end, timeRange2.end)
    };
}