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

    setEvents([...events, newEvent]);
  };

  const deleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  return (
    <div>
      <h1> Calendar </h1>
      <div>
        <Calendar onChange={onChange} value={date} />
        <h2><button onClick={addEvent}>Event</button></h2>
      </div>
      <div>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <strong>{event.date.toLocaleDateString()}</strong> - {event.description}
              <h3><button onClick={() => deleteEvent(index)}>Delete</button></h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
