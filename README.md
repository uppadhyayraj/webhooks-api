# Webhooks API

This project implements a simple Node.js application that provides webhook APIs for sending order delivery updates. The updates include various events such as order placed, processed, picked up, on the way, delivered, and retry.

## Project Structure

```
webhooks-api
├── src
│   ├── controllers
│   │   └── orderController.js
│   ├── routes
│   │   └── orderRoutes.js
│   ├── services
│   │   └── orderService.js
│   └── app.js
├── package.json
├── .env
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd webhooks-api
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   WEBHOOK_URL=<your_webhook_url>
   PORT=3000
   ```

### Running the Application

To start the server, run the following command:
```
npm start
```

The server will start on the port specified in the `.env` file (default is 3000).

### API Endpoints

The following endpoints are available for sending order updates:

- **Order Placed**
  - **POST** `/api/orders/placed`
  - Request Body: `{ "orderId": "12345", "status": "placed","contactDetails": "tester34@test.com" }`

- **Order Processed**
  - **POST** `/api/orders/processed`
  - Request Body: `{ "orderId": "12345", "status": "processed","contactDetails": "tester34@test.com" }`

- **Order Picked Up**
  - **POST** `/api/orders/pickedup`
  - Request Body: `{ "orderId": "12345", "status": "pickedup","contactDetails": "tester34@test.com" }`

- **Order On The Way**
  - **POST** `/api/orders/ontheway`
  - Request Body: `{ "orderId": "12345", "status": "ontheway","contactDetails": "tester34@test.com" }`

- **Order Delivered**
  - **POST** `/api/orders/delivered`
  - Request Body: `{ "orderId": "12345", "status": "delivered","contactDetails": "tester34@test.com" }`

- **Order Retry**
  - **POST** `/api/orders/retry`
  - Request Body: `{ "orderId": "12345", "status": "retry","contactDetails": "tester34@test.com" }`

### Testing the APIs

You can use tools like Postman or curl to test the APIs. Here’s an example using curl:

```bash
curl -X POST http://localhost:3000/api/orders/placed -H "Content-Type: application/json" -d '{"orderId": "12345", "status": "placed","contactDetails": "tester34@test.com"}'
```

Replace `http://localhost:3000` with your server URL if different.

## License

This project is licensed under the MIT License.
