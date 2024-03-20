import React from 'react'
import ReactDOM from 'react-dom/client'
import CalendarPresenter from "./interface-adapters/CalendarPresenter.tsx";
import {GroupEvents} from "./use-cases/GroupEvents.ts";
import events from '../input.json'


const rootElement = document.getElementById('root')

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <CalendarPresenter overlappingEventGroups={GroupEvents(events)} calendarStart={"9:00"} />
        </React.StrictMode>,
    )
}