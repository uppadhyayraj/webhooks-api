const express = require('express');
const router = express.Router();

router.post('/webhook-receiver', (req, res) => {
    console.log('Received webhook:', req.body);
    res.status(200).json({ message: 'Webhook received', data: req.body });
});

module.exports = router;
