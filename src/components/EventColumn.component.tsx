import React, {ReactNode} from "react";
import './EventColumn.css';


/**
 * Event column component props
 * @param children The children to render
 * @param marginTop The margin top
 */
export interface EventColumnProps {
    children: ReactNode;
    marginTop: number;
}


const EventColumnComponent: React.FC<EventColumnProps> = ({ children, marginTop }) => {
    return (
        <div className="event-column" style={{marginTop: `${marginTop}vh`}} >
            {children}
        </div>
    )
}

export default EventColumnComponent;