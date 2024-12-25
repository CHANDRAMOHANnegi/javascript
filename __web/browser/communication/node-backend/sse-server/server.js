const express = require('express');
const app = express();

app.get('/stocks', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const sendStockUpdates = () => {
    const stockData = {
      symbol: 'AAPL',
      price: (150 + Math.random() * 10).toFixed(2),
      timestamp: new Date().toISOString(),
    };
    res.write(`data: ${JSON.stringify(stockData)}\n\n`);
  };

  // Send updates every second
  const interval = setInterval(sendStockUpdates, 1000);

  req.on('close', () => clearInterval(interval)); // Clean up on client disconnect
});

app.listen(3000, () => console.log('Server running on port 3000'));
