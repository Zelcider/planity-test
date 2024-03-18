import React, {ReactNode} from "react";
import './GroupedEvent.css';

/**
 * Grouped event properties
 */
export interface GroupedEventProps {
    height: number;
    marginTop: number;
    children: ReactNode;
}

/**
 * Grouped event component
 * @param height The height of the event
 * @param marginTop The margin top of the event
 * @param children The children
 */
const GroupedEvent: React.FC<GroupedEventProps> = ({ children, height: height, marginTop }) => {
    return (
        <div className="grouped-events" style={{height: `${height}vh`, marginTop: `${marginTop}vh`}} >
            {children}
        </div>
    )
}

export default GroupedEvent;