/**
 * Event interface
 * @property {string} start - The start time of the event in "HH:mm" format.
 * @property {number} duration - The duration of the event in minutes.
 */
export interface EventDto {
    id: number;
    start: string;
    duration: number;
}



