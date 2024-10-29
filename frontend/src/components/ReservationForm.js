import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/reservations', {
      name,
      people,
      dateTime,
    })
    .then((response) => {
      alert('Reservation made successfully!');
    })
    .catch((error) => {
      alert('Error making reservation.');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Reservation</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Number of People:</label>
      <input type="number" value={people} onChange={(e) => setPeople(e.target.value)} required />
      <label>Date and Time:</label>
      <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} required />
      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;
