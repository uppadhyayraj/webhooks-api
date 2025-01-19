const { ORDER_PLACED, ORDER_PROCESSED, ORDER_PICKED_UP, ORDER_ON_THE_WAY, ORDER_DELIVERED, ORDER_FAILED, ORDER_CANCELLED } = require('../appconstants/notifications');
const orderService = require('../services/orderService');

exports.orderPlaced = async (req, res) => {
    try {
        const { orderId, status, contactDetails } = req.body;
        const payload = { orderId, status, contactDetails, timestamp: new Date(), message: ORDER_PLACED };
        const response = await orderService.sendWebhook("order_placed", payload);
        const jsonResponse = response;
        res.status(200).json(jsonResponse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.orderProcessed = async (req, res) => {
    try {
        const { orderId, status, contactDetails } = req.body;
        const payload = { orderId, status, contactDetails, timestamp: new Date(), message: ORDER_PROCESSED };
        const response = await orderService.sendWebhook("order_processed", payload);
        const jsonResponse = response;
        res.status(200).json(jsonResponse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.orderPickedUp = async (req, res) => {
    try {
        const { orderId, status, contactDetails } = req.body;
        const payload = { orderId, status, contactDetails, timestamp: new Date(), message: ORDER_PICKED_UP };
        const response = await orderService.sendWebhook("order_picked_up", payload);
        const jsonResponse = response;
        res.status(200).json(jsonResponse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.orderOnTheWay = async (req, res) => {
    try {
        const { orderId, status, contactDetails } = req.body;
        const payload = { orderId, status, contactDetails, timestamp: new Date(), message: ORDER_ON_THE_WAY };
        const response = await orderService.sendWebhook("order_on_the_way", payload);
        const jsonResponse = response;
        res.status(200).json(jsonResponse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.orderDelivered = async (req, res) => {
    try {
        const { orderId, status, contactDetails } = req.body;
        const payload = { orderId, status, contactDetails, timestamp: new Date(), message: ORDER_DELIVERED };
        const response = await orderService.sendWebhook("order_delivered", payload);
        const jsonResponse = response;
        res.status(200).json(jsonResponse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.orderRetry = async (req, res) => {
    try {
        const { orderId, status, contactDetails } = req.body;
        const payload = { orderId, status, contactDetails, timestamp: new Date(), message: ORDER_FAILED };
        const response = await orderService.sendWebhook("order_retry", payload);
        const jsonResponse = response;
        res.status(200).json(jsonResponse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.orderCancelled = async (req, res) => {
    try {
        const { orderId, status, contactDetails } = req.body;
        const payload = { orderId, status, contactDetails, timestamp: new Date(), message: ORDER_CANCELLED };
        const response = await orderService.sendWebhook("order_cancelled", payload);
        const jsonResponse = response;
        res.status(200).json(jsonResponse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
