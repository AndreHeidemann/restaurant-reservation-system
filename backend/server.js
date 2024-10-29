const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Sample menu data
const menu = [
  {
    category: 'Entradas',
    items: [
      { name: 'Bruschetta', description: 'Grilled bread with tomatoes, olive oil, and herbs', price: 8.0 },
      { name: 'Caesar Salad', description: 'Romaine lettuce with Caesar dressing and croutons', price: 10.0 },
    ],
  },
  {
    category: 'Pratos Principais',
    items: [
      { name: 'Lasagna', description: 'Layers of pasta with tomato sauce, ricotta, and meat', price: 15.0 },
      { name: 'Grilled Salmon', description: 'Grilled salmon fillet served with vegetables', price: 20.0 },
    ],
  },
];

const reservations = [];

// API Endpoints
app.get('/menu', (req, res) => {
  res.json(menu);
});

app.post('/reservations', (req, res) => {
  const { name, people, dateTime } = req.body;
  if (!name || !people || !dateTime) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  reservations.push({ name, people, dateTime });
  res.status(201).json({ message: 'Reservation successful!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
