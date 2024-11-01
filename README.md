# Sistema de Reserva e Menu de Restaurante

## Descrição do Projeto

O **Sistema de Reserva e Menu de Restaurante** é uma aplicação web que permite aos usuários visualizar o cardápio de um restaurante e realizar reservas de mesa. O projeto foi desenvolvido como parte de um teste técnico para demonstrar habilidades em desenvolvimento Full-Stack, utilizando tecnologias para o front-end e back-end.

## Funcionalidades

- **Consulta de Cardápio**: Os usuários podem visualizar o cardápio completo do restaurante, categorizado em entradas, pratos principais, sobremesas e bebidas.
- **Reserva de Mesa**: Permite que os usuários façam reservas de mesa informando nome, número de pessoas e data/hora desejada.
- **Documentação da API**: A API está documentada utilizando Swagger, facilitando o entendimento e teste dos endpoints disponíveis.

## Tecnologias Utilizadas

### Front-End

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **React Router DOM**: Biblioteca para gerenciamento de rotas no React.

### Back-End

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express.js**: Framework web para Node.js.
- **Swagger UI Express**: Para documentação interativa da API.
- **Swagger JSDoc**: Para geração automática da documentação Swagger a partir de comentários no código.
- **Cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **Body-Parser**: Middleware para analisar o corpo das requisições HTTP.

### Implantação

- **Vercel**: Plataforma para hospedagem e implantação contínua de aplicações web.

## Como Executar o Projeto Localmente

### Passos para Configurar o Back-End

1. **Navegar para o Diretório do Back-End**

   ```bash   
   cd backend
   ```

2. **Instalar as Dependências**

   ```bash
   npm install
   ```

3. **Gerar o Arquivo swagger.json**

   ```bash
   npm run generate-swagger
   ```

4. **Iniciar o Servidor**

   ```bash
   node index.js
   ```

5. **Acessar a Documentação da API**

   Abra o navegador e acesse `http://localhost:5000/api-docs` para visualizar a documentação interativa da API.

### Passos para Configurar o Front-End

1. **Navegar para o Diretório do Front-End**

   ```bash
   cd frontend
   ```

2. **Instalar as Dependências**

   ```bash
   npm install
   ```

3. **Iniciar a Aplicação**

   ```bash
   npm start
   ```

4. **Acessar a Aplicação**

   Abra o navegador e acesse `http://localhost:3000` para utilizar a aplicação.


## Endpoints da API

### GET `/menu`

Retorna o cardápio completo do restaurante, categorizado em:

- Entradas
- Pratos Principais
- Sobremesas
- Bebidas

### POST `/reservations`

Cria uma nova reserva de mesa.

**Parâmetros do Corpo da Requisição (JSON):**

- `name` (string): Nome do cliente.
- `people` (integer): Número de pessoas.
- `dateTime` (string): Data e hora da reserva no formato ISO 8601.

**Exemplo:**

```json
{
  "name": "João Silva",
  "people": 4,
  "dateTime": "2023-10-15T19:30:00Z"
}
```

## Links de Acesso

- **Aplicação Hospedada:** [Sistema de Reserva e Menu de Restaurante](https://restaurant-reservation-system-blue.vercel.app/)
- **Documentação da API (Swagger):** [API Documentation](https://restaurant-reservation-system-5c4d-ddjbtn9np.vercel.app/api-docs/)
