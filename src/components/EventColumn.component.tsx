import React, {ReactNode} from "react";
import './EventColumn.css';

/**
 * Event column component props
 * @param children The children to render
 * @param marginTop The margin top
 */
export interface EventColumnProps {
    children: ReactNode;
    indexGroup: number;
}


const EventColumnComponent: React.FC<EventColumnProps> = ({ children, indexGroup }) => {
    return (
        <div className={"event-column"}
            style={{gridColumn: `${indexGroup +1}`}}>
            {children}
        </div>
    )
}

export default EventColumnComponent;