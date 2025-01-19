# Webhooks API

This project implements a simple Node.js application that provides webhook APIs for sending order delivery updates. The updates include various events such as order placed, processed, picked up, on the way, delivered, and retry.

## Project Structure

```
webhooks-api
├── src
│   ├── appconstants
│   │   └── notifications.js
│   ├── controllers
│   │   └── orderController.js
│   ├── routes
│   │   ├── orderRoutes.js
│   │   └── webhookReceiverRoutes.js
│   ├── services
│   │   └── orderService.js
│   └── swagger.js
│   └── app.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)
- Webhook URL for configuring in the app

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
  - **POST** `/api/webhooks/order/placed`
  - Request Body: `{ "orderId": "12345", "status": "placed","contactDetails": "tester34@test.com" }`

- **Order Processed**
  - **POST** `api/webhooks/order/processed`
  - Request Body: `{ "orderId": "12345", "status": "processed","contactDetails": "tester34@test.com" }`

- **Order Picked Up**
  - **POST** `/api/webhooks/order/pickedup`
  - Request Body: `{ "orderId": "12345", "status": "pickedup","contactDetails": "tester34@test.com" }`

- **Order On The Way**
  - **POST** `/api/webhooks/order/ontheway`
  - Request Body: `{ "orderId": "12345", "status": "ontheway","contactDetails": "tester34@test.com" }`

- **Order Delivered**
  - **POST** `/api/webhooks/order/delivered`
  - Request Body: `{ "orderId": "12345", "status": "delivered","contactDetails": "tester34@test.com" }`

- **Order Retry**
  - **POST** `/api/webhooks/order/retry`
  - Request Body: `{ "orderId": "12345", "status": "retry","contactDetails": "tester34@test.com" }`

### Testing the APIs

You can use tools like Postman or curl to test the APIs. Here’s an example using curl:

```bash
curl -X POST http://localhost:3000/api/webhooks/order/placed -H "Content-Type: application/json" -d '{"orderId": "12345", "status": "placed","contactDetails": "tester34@test.com"}'
```

Replace `http://localhost:3000` with your server URL if different.

### Try API Documentations
This APIs also bundled with Swagger, to use swagger to test the APIs, use: http://localhost:3000/api-docs/ 

## License

This project is licensed under the MIT License.
