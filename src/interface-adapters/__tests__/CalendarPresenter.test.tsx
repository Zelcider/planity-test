import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {GroupedEvent} from "../../entities/GroupedEvent.ts";
import CalendarPresenter from "../CalendarPresenter.tsx";

describe('CalendarPresenter', () => {
    const mockGroupedEvents: GroupedEvent[] = [
        {
            key: {start: 540, end: 600},
            events: [
                {
                    overLappingIndex: {start: 540, end: 600},
                    events: [
                        {
                            id: 1,
                            timeRange:{start: 540, end: 600},
                        }
                    ]
                }
            ]
        },
        {
            key: {start: 600, end: 660},
            events: [
                {
                    overLappingIndex: {start: 600, end: 660},
                    events: [
                        {
                            id: 2,
                            timeRange: {start: 600, end: 660},
                        }
                    ]
                }
            ]
        }
    ];

    it('renders without crashing', () => {
        // Arrange
        // Act
        render(<CalendarPresenter groupedEvents={mockGroupedEvents} />);
        // Assert (implicit - no exception means pass)
    });

    it('renders correct number of GroupedEventComponents', () => {
        // Arrange
        const expectedGroupedEventComponents = mockGroupedEvents.length;
        // Act
        const { container } = render(<CalendarPresenter groupedEvents={mockGroupedEvents} />);
        const actualGroupedEventComponents = container.getElementsByClassName('grouped-events').length;
        // Assert
        expect(actualGroupedEventComponents).toBe(expectedGroupedEventComponents);
    });

    it('renders correct number of ColumnedEventComponents', () => {
        // Arrange
        const expectedColumnedEventComponents = mockGroupedEvents.reduce((total, groupedEvent) => total + groupedEvent.events.length, 0);
        // Act
        const { container } = render(<CalendarPresenter groupedEvents={mockGroupedEvents} />);
        const actualColumnedEventComponents = container.getElementsByClassName('columned-events').length;
        // Assert
        expect(actualColumnedEventComponents).toBe(expectedColumnedEventComponents);
    });

    it('renders correct number of TimeRangeEventComponents', () => {
        // Arrange
        const expectedTimeRangeEventComponents = mockGroupedEvents.reduce((total, groupedEvent) => {
            return total + groupedEvent.events.reduce((total, columnedEvent) => total + columnedEvent.events.length, 0);
        }, 0);
        // Act
        const { container } = render(<CalendarPresenter groupedEvents={mockGroupedEvents} />);
        const actualTimeRangeEventComponents = container.getElementsByClassName('time-range-event').length;
        // Assert
        expect(actualTimeRangeEventComponents).toBe(expectedTimeRangeEventComponents);
    });

    it('does not render GroupedEventComponent when groupedEvents is empty', () => {
        // Arrange
        // Act
        const { container } = render(<CalendarPresenter groupedEvents={[]} />);
        const groupedEventComponent = container.getElementsByClassName('grouped-events');
        // Assert
        expect(groupedEventComponent).toBeNull();
    });
});