import React from "react";
import './ColumnedEvent.css';

export const ColumedEventComponent: React.FC<{ children : JSX.Element  }> = ({ children }) => {
    return (
        <div className="column-events">
            {children}
        </div>
    )
}