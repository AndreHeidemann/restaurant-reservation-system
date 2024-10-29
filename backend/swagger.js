const swaggerJsDoc = require('swagger-jsdoc');
const fs = require('fs');

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
        url: '/', // Base URL
      },
    ],
  },
  apis: ['./index.js'],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

fs.writeFileSync('./swagger.json', JSON.stringify(swaggerSpec, null, 2));
