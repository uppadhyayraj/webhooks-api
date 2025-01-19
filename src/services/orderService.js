exports.sendWebhook = async (eventType, payload) => {
    const webhookUrl = process.env.WEBHOOK_URL;

    if (!webhookUrl) {
        throw new Error('Webhook URL is not defined in the environment variables.');
    }

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            event: eventType,
            data: payload,
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to send webhook: ${response.statusText}`);
    }

    const text = await response.text();
    return text ? JSON.parse(text) : {};
};
