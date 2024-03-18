import React, {ReactNode} from "react";
import './ColumnedEvent.css';

/**
 * Columned event properties
 */
export interface ColumnedEventProps {
    children: ReactNode;
    marginTop: number;
}

/**
 * Columned event component
 * @param children The children
 * @param marginTop The margin top of the event
 */
const ColumnedEventComponent: React.FC<ColumnedEventProps> = ({ children, marginTop }) => {
    return (
        <div className="columned-events" style={{marginTop: `${marginTop}vh`}} >
            {children}
        </div>
    )
}

export default ColumnedEventComponent;