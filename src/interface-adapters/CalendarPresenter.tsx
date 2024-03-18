import { GroupedEvent } from '../entities';
import CalendarComponent from "../components/Calendar.component.tsx";
import ColumnedEventComponent from '../components/Calendar.component.tsx';
import TimeRangeEventComponent from "../components/TimeRangeEvent.component.tsx";

export class CalendarPresenter {
    present(groupedEvents: GroupedEvent[]) {
        return (
            <CalendarComponent>
                {groupedEvents.map(groupedEvent => (
                    <ColumnedEventComponent key={groupedEvent.key}>
                        {groupedEvent.events.map(event => (
                            <TimeRangeEventComponent key={event.id} timeRangeEvent={event} />
                        ))}
                    </ColumnedEventComponent>
                ))}
                </CalendarComponent>
        )

    );
}
}