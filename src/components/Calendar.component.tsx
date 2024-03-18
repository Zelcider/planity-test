import './ColumnedEventComponent.css'; // Import the CSS for styling

const ColumnedEventComponent = ({ children }) => {
    return (
        <div className="calendar-container">
            {children}
        </div>
    );
};

export default ColumnedEventComponent;