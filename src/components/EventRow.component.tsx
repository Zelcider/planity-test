import React, {ReactNode} from "react";
import './EventRow.css';
import {calendarStart} from "../interface-adapters/CalendarPresenter.tsx";

/**
 * Event row component props
 * @param children The children to render
 */
export interface EventRowProps {
    children: ReactNode;
    rowStart: number;
    rowEnd: number;
}

const EventRowComponent: React.FC<EventRowProps> = ({ children, rowEnd, rowStart }) => {
    return (
        <div
            className={"event-row"}
            style={{
            gridRowStart: `${rowStart - calendarStart}`,
            gridRowEnd: `${rowEnd - calendarStart}`,
        }}>
            {children}
        </div>
    )
}

export default EventRowComponent;