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
 * Update the group with the event
 * @param start The start time of the event
 * @param duration The duration of the event
 * @returns The time range of the event
 */
export function computeTimeRange(start: string, duration: number): TimeRange {
    const [hours, minutes] = start.split(':').map(Number);
    if (hours < 0 || hours > 23 ) throw new Error('Invalid hour');
    if (minutes < 0 || minutes > 59) throw new Error('Invalid minute');
    const startMinutes = hours * 60 + minutes;
    const endMinutes = startMinutes + duration;
    return { start: startMinutes, end: endMinutes };
}