import './Calendar.css';
import React, {ReactNode} from "react";

/**
 * Columned event component properties
 */
export interface ColumnedEventComponentProps {
    children: ReactNode;
}

/**
 * Columned event component
 * @param children The children
 */
const CalendarComponent :React.FC<ColumnedEventComponentProps> = ({ children }) => {
    return (
        <div className="calendar">
            {children}
        </div>
    );
};

export default CalendarComponent;