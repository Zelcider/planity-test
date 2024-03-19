import {TimeRange} from "../entities/TimeRange.ts";

const totalMinutesInDay = 24 * 60;
export const getPaddingTop = (timeRange: TimeRange, previousEnd = 0): number => (timeRange.start - previousEnd) / totalMinutesInDay *100;
export const getHeight = (timeRange: TimeRange): number => (timeRange.end - timeRange.start) / totalMinutesInDay * 100;

