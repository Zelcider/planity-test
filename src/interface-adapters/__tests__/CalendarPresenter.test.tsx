import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {OverlappingEventGroup} from "../../entities/OverlappingEventGroup.ts";
import CalendarPresenter from "../CalendarPresenter.tsx";
describe('CalendarPresenter', () => {
    const mockGroupedEvents: OverlappingEventGroup[] = [
        {
            key: {start: 540, end: 600},
            events: [
                {
                    timeRange: {start: 540, end: 600},
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
                    timeRange: {start: 600, end: 660},
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
        render(<CalendarPresenter groupedEvents={mockGroupedEvents} calendarStart={"9:00"} />);
        // Assert (implicit - no exception means pass)
    });
    it('renders correct number of GroupedEventComponents', () => {
        // Arrange
        const expectedGroupedEventComponents = mockGroupedEvents.length;
        // Act
        const { container } = render(<CalendarPresenter groupedEvents={mockGroupedEvents} calendarStart={"9:00"} />);
        const actualGroupedEventComponents = container.getElementsByClassName('grouped-events').length;
        // Assert
        expect(actualGroupedEventComponents).toBe(expectedGroupedEventComponents);
    });
    it('renders correct number of ColumnedEventComponents', () => {
        // Arrange
        const expectedColumnedEventComponents = mockGroupedEvents.reduce((total, groupedEvent) => total + groupedEvent.events.length, 0);
        // Act
        const { container } = render(<CalendarPresenter groupedEvents={mockGroupedEvents} calendarStart={"9:00"} />);
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
        const { container } = render(<CalendarPresenter groupedEvents={mockGroupedEvents} calendarStart={"9:00"} />);
        const actualTimeRangeEventComponents = container.getElementsByClassName('time-range-event').length;
        // Assert
        expect(actualTimeRangeEventComponents).toBe(expectedTimeRangeEventComponents);
    });
    it('renders correct height and marginTop for GroupedEventComponent', () => {
        // Arrange
        const expectedHeight = 4.166666666666666; // 10%
        const expectedMarginTop = 0; // 10%

        // Act
        const { container } = render(<CalendarPresenter groupedEvents={mockGroupedEvents} calendarStart={"9:00"} />);
        const groupedEventsElement = container.querySelector('.grouped-events');
        // Assert
        expect(groupedEventsElement).toBeDefined();
        expect(groupedEventsElement).toHaveStyle(`
      height: ${expectedHeight}vh;
      margin-top: ${expectedMarginTop}vh;
    `);
    });
    it('renders correct marginTop for ColumnedEventComponent', () => {
        // Arrange
        const expectedMarginTop = 0; // 10%

        // Act
        const { container } = render(<CalendarPresenter groupedEvents={mockGroupedEvents} calendarStart={"9:00"} />);
        const columnedEventsElement = container.querySelector('.columned-events');
        // Assert
        expect(columnedEventsElement).toBeDefined();
        expect(columnedEventsElement).toHaveStyle(`
      margin-top: ${expectedMarginTop}vh;
    `);
    });
    it('renders correct height and marginTop for TimeRangeEventComponent', () => {
        // Arrange
        const expectedHeight = 4.166666666666666; // 10%
        const expectedMarginTop = 0; // 10%

        // Act
        const { container } = render(<CalendarPresenter groupedEvents={mockGroupedEvents} calendarStart={"9:00"} />);
        const timeRangeEventElement = container.querySelector('.time-range-event');
        // Assert
        expect(timeRangeEventElement).toBeDefined();
        expect(timeRangeEventElement).toHaveStyle(`
     height: ${expectedHeight}vh;
      margin-top: ${expectedMarginTop}vh;
    `);
    });
});