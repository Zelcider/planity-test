import { describe, it, expect } from 'vitest';


interface GroupedEvent {
    start: string;
    end: string;
    events: { id: number; start: string; end: string }[];
}

function groupEvents(events: { duration: number; start: string; id: number }[]) : GroupedEvent[] {
    return events
}

describe('Group Event', () => {
    it('should return one group on event id 1 start 15:00 duration 90', () => {
        //Arrange
        const events = [{ id: 1, start: '15:00', duration: 90 }];

        //Act
        const result = groupEvents(events);

        //Assert
        expect(result).toBeDefined();
    });
});