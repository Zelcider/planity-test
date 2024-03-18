import { describe, expect, test } from 'vitest';
import {GroupEvents} from "../use-cases/GroupEvents.ts";

describe('Group Event', () => {
        test.each([
            [1,1, [{ id: 1, start: '15:00', duration: 90 }]],
            [2,1, [{ id: 1, start: '15:00', duration: 90 }, { id: 2, start: '16:30', duration: 30 }]],
            [1,2, [{ id: 1, start: '15:00', duration: 90 }, { id: 2, start: '16:00', duration: 30 }]],
            [1,2, [{ id: 1, start: '15:00', duration: 10 }, { id: 2, start: '14:45', duration: 30 }, { id: 3, start: '15:10', duration: 30 }]],
            [1,2, [{ id: 1, start: '12:00', duration: 10 }, { id: 2, start: '12:10', duration: 30 }, { id: 3, start: '11:45', duration: 30 }]],
            [1,3, [{ id: 1, start: '12:00', duration: 30 }, { id: 2, start: '12:10', duration: 30 }, { id: 3, start: '12:20', duration: 30 }]],
        ])(
            'should return %d group(s) with %d columns on events %j',
            (expectedGroupCount, expectedColumnCount, events) => {
                // Arrange & Act
                const result = GroupEvents(events);

                // Assert
                expect(result,`Expected ${expectedGroupCount} groups, but got ${result.length}`).toHaveLength(expectedGroupCount);

                if(expectedGroupCount == 1) {
                    expect(result[0].events,`Expected ${expectedColumnCount} columns, but got ${result[0].events.length}`).toHaveLength(expectedColumnCount);
                }
            }
        );
});