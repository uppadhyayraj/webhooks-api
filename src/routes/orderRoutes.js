const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.post('/webhooks/order/placed', orderController.orderPlaced);
router.post('/webhooks/order/processed', orderController.orderProcessed);
router.post('/webhooks/order/pickedup', orderController.orderPickedUp);
router.post('/webhooks/order/ontheway', orderController.orderOnTheWay);
router.post('/webhooks/order/delivered', orderController.orderDelivered);
router.post('/webhooks/order/retry', orderController.orderRetry);
router.post('/webhooks/order/cancelled', orderController.orderCancelled);

module.exports = router;
