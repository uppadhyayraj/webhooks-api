const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

/**
 * @swagger
 * /api/webhooks/order/placed:
 *   post:
 *     summary: Order Placed
 *     description: Send notification for order placed
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *               status:
 *                 type: string
 *               contactDetails:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notification sent
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 */
router.post('/webhooks/order/placed', orderController.orderPlaced);

/**
 * @swagger
 * /api/webhooks/order/processed:
 *   post:
 *     summary: Order Processed
 *     description: Send notification for order processed
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *               status:
 *                 type: string
 *               contactDetails:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notification sent
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 */
router.post('/webhooks/order/processed', orderController.orderProcessed);

/**
 * @swagger
 * /api/webhooks/order/pickedup:
 *   post:
 *     summary: Order Picked Up
 *     description: Send notification for order picked up
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *               status:
 *                 type: string
 *               contactDetails:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notification sent
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 */
router.post('/webhooks/order/pickedup', orderController.orderPickedUp);

/**
 * @swagger
 * /api/webhooks/order/ontheway:
 *   post:
 *     summary: Order On The Way
 *     description: Send notification for order on the way
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *               status:
 *                 type: string
 *               contactDetails:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notification sent
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 */
router.post('/webhooks/order/ontheway', orderController.orderOnTheWay);

/**
 * @swagger
 * /api/webhooks/order/delivered:
 *   post:
 *     summary: Order Delivered
 *     description: Send notification for order delivered
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *               status:
 *                 type: string
 *               contactDetails:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notification sent
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 */
router.post('/webhooks/order/delivered', orderController.orderDelivered);

/**
 * @swagger
 * /api/webhooks/order/retry:
 *   post:
 *     summary: Order Retry
 *     description: Send notification for order retry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *               status:
 *                 type: string
 *               contactDetails:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notification sent
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 */
router.post('/webhooks/order/retry', orderController.orderRetry);

/**
 * @swagger
 * /api/webhooks/order/cancelled:
 *   post:
 *     summary: Order Cancelled
 *     description: Send notification for order cancelled
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *               status:
 *                 type: string
 *               contactDetails:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notification sent
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 */
router.post('/webhooks/order/cancelled', orderController.orderCancelled);

module.exports = router;
