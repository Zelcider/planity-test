import './Calendar.css';
import React, {ReactNode} from "react";

/**
 * Calendar component props
 * @param children The children to render
 */
export interface CalendarComponentProps {
    children: ReactNode;
}
const CalendarComponent :React.FC<CalendarComponentProps> = ({ children }) => {
    return (
        <div className="calendar">
            {children}
        </div>
    );
};

export default CalendarComponent;