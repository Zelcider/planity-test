import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {OverlappingEventGroup} from "../../entities/OverlappingEventGroup.ts";
import CalendarPresenter from "../CalendarPresenter.tsx";
describe('CalendarPresenter', () => {
    const mockedOverlappingEventGroups: OverlappingEventGroup[] = [
        {
            key: {start: 540, end: 600},
            nonOverlappingEventGroups: [
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
            nonOverlappingEventGroups: [
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
        render(<CalendarPresenter overlappingEventGroups={mockedOverlappingEventGroups} calendarStart={"9:00"} />);
        // Assert (implicit - no exception means pass)
    });
    it('renders correct number of GroupedEventComponents', () => {
        // Arrange
        const expectedGroupedEventComponents = mockedOverlappingEventGroups.length;
        // Act
        const { container } = render(<CalendarPresenter overlappingEventGroups={mockedOverlappingEventGroups} calendarStart={"9:00"} />);
        const actualGroupedEventComponents = container.getElementsByClassName('event-row').length;
        // Assert
        expect(actualGroupedEventComponents).toBe(expectedGroupedEventComponents);
    });
    it('renders correct number of ColumnedEventComponents', () => {
        // Arrange
        const expectedColumnedEventComponents = mockedOverlappingEventGroups.reduce((total, overlappingEventGroup) => total + overlappingEventGroup.nonOverlappingEventGroups.length, 0);
        // Act
        const { container } = render(<CalendarPresenter overlappingEventGroups={mockedOverlappingEventGroups} calendarStart={"9:00"} />);
        const actualColumnedEventComponents = container.getElementsByClassName('event-column').length;
        // Assert
        expect(actualColumnedEventComponents).toBe(expectedColumnedEventComponents);
    });
    it('renders correct number of TimeRangeEventComponents', () => {
        // Arrange
        const expectedTimeRangeEventComponents = mockedOverlappingEventGroups.reduce((total, overlappingEventGroup) => {
            return total + overlappingEventGroup.nonOverlappingEventGroups.reduce((total, columnedEvent) => total + columnedEvent.events.length, 0);
        }, 0);
        // Act
        const { container } = render(<CalendarPresenter overlappingEventGroups={mockedOverlappingEventGroups} calendarStart={"9:00"} />);
        const actualTimeRangeEventComponents = container.getElementsByClassName('event').length;
        // Assert
        expect(actualTimeRangeEventComponents).toBe(expectedTimeRangeEventComponents);
    });
    it('renders correct height and marginTop for GroupedEventComponent', () => {
        // Arrange
        const expectedHeight = 4.166666666666666; // 10%
        const expectedMarginTop = 0; // 10%

        // Act
        const { container } = render(<CalendarPresenter overlappingEventGroups={mockedOverlappingEventGroups} calendarStart={"9:00"} />);
        const eventRowElement = container.querySelector('.event-row');
        // Assert
        expect(eventRowElement).toBeDefined();
        expect(eventRowElement).toHaveStyle(`
      height: ${expectedHeight}vh;
      margin-top: ${expectedMarginTop}vh;
    `);
    });
    it('renders correct marginTop for ColumnedEventComponent', () => {
        // Arrange
        const expectedMarginTop = 0; // 10%

        // Act
        const { container } = render(<CalendarPresenter overlappingEventGroups={mockedOverlappingEventGroups} calendarStart={"9:00"} />);
        const eventColumnElement = container.querySelector('.event-column');
        // Assert
        expect(eventColumnElement).toBeDefined();
        expect(eventColumnElement).toHaveStyle(`
      margin-top: ${expectedMarginTop}vh;
    `);
    });
    it('renders correct height and marginTop for TimeRangeEventComponent', () => {
        // Arrange
        const expectedHeight = 4.166666666666666; // 10%
        const expectedMarginTop = 0; // 10%

        // Act
        const { container } = render(<CalendarPresenter overlappingEventGroups={mockedOverlappingEventGroups} calendarStart={"9:00"} />);
        const eventElement = container.querySelector('.event');
        // Assert
        expect(eventElement).toBeDefined();
        expect(eventElement).toHaveStyle(`
     height: ${expectedHeight}vh;
      margin-top: ${expectedMarginTop}vh;
    `);
    });
});