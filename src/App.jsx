import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const addEvent = () => {
    const newEvent = {
      date: date,
      description: prompt('What is going on?'),
    };

    setEvents([events, newEvent]);
  };

  const deleteEvent = (index) => {
    const updatedEvents = [events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  return (
    <div>
      <h1>React Calendar App</h1>
      <div>
        <Calendar onChange={onChange} value={date} />
        <button onClick={addEvent}>Event</button>
      </div>
      <div>
        <h2></h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <strong>{event.date.toLocaleDateString()}</strong> - {event.description}
              <button onClick={() => deleteEvent(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default App;
