import React, {ReactNode} from "react";
import './ColumnedEvent.css';

const ColumnedEventComponent: React.FC<{ children : ReactNode, heigth: number, paddingTop: number  }> = ({ children, heigth: height, paddingTop }) => {
    return (
        <div className="columned-events" style={{height: `${height}vh`, paddingTop: `${paddingTop}vh`}} >
            {children}
        </div>
    )
}

export default ColumnedEventComponent;