const express = require('express');
require('dotenv').config();
const app = express();
const orderRoutes = require('./routes/orderRoutes');
const webhookReceiverRoutes = require('./routes/webhookReceiverRoutes');
const swaggerSetup = require('./swagger');

app.use(express.json()); // Middleware to parse JSON bodies
app.use('/api', orderRoutes); // Use the router for the specified path
app.use('/api', webhookReceiverRoutes); // Add the webhook receiver route

// Setup Swagger
swaggerSetup(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
