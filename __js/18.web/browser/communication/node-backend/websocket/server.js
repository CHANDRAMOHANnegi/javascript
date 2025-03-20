const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (ws) => {
    console.log('Client connected');

    // Send stock updates periodically
    setInterval(() => {
        const stockData = {
            symbol: 'AAPL',
            price: (150 + Math.random() * 10).toFixed(2),
            timestamp: new Date().toISOString(),
        };
        ws.send(JSON.stringify(stockData));
    }, 1000); // Update every second
});
