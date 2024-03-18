export interface ColumnedEvent {
    overLappingIndex: StartEnd;
    events: { id: number; start: number; end: number; }[];
}