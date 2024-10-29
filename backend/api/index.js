const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Reserva e Menu do Restaurante',
      version: '1.0.0',
      description: 'API para consulta de cardápio e reserva de mesas',
    },
    servers: [
      {
        // url: `http://localhost:${PORT}`,
        url: `/`,
      },
    ],
  },
  apis: [__filename],
};

const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


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

/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Retorna o cardápio do restaurante
 *     tags:
 *       - Menu
 *     responses:
 *       200:
 *         description: Lista de itens do cardápio
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   category:
 *                     type: string
 *                     example: Entradas
 *                   items:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                           example: Bruschetta
 *                         description:
 *                           type: string
 *                           example: Grilled bread with tomatoes, olive oil, and herbs
 *                         price:
 *                           type: number
 *                           example: 8.0
 */

app.get('/menu', (req, res) => {
  res.json(menu);
});

/**
 * @swagger
 * /reservations:
 *   post:
 *     summary: Cria uma nova reserva de mesa
 *     tags:
 *       - Reservations
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - people
 *               - dateTime
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               people:
 *                 type: integer
 *                 example: 4
 *               dateTime:
 *                 type: string
 *                 format: date-time
 *                 example: '2023-10-15T19:30:00Z'
 *     responses:
 *       201:
 *         description: Reserva criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Reservation successful!'
 *       400:
 *         description: Dados inválidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: 'All fields are required.'
 */

app.post('/reservations', (req, res) => {
  const { name, people, dateTime } = req.body;
  if (!name || !people || !dateTime) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  reservations.push({ name, people, dateTime });
  res.status(201).json({ message: 'Reservation successful!' });
});

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

module.exports = app;