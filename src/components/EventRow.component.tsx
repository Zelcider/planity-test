import React, {ReactNode} from "react";
import './EventRow.css.css';


/**
 * Event row component props
 * @param height The height of the event
 * @param marginTop The margin top
 * @param children The children to render
 */
export interface EventRowProps {
    height: number;
    marginTop: number;
    children: ReactNode;
}

const EventRowComponent: React.FC<EventRowProps> = ({ children, height: height, marginTop }) => {
    return (
        <div className="event-row" style={{height: `${height}vh`, marginTop: `${marginTop}vh`}} >
            {children}
        </div>
    )
}

export default EventRowComponent;