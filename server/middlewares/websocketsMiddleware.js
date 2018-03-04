const WebSocket = require('ws');

module.exports = (server) => {
  const wss = new WebSocket.Server({ server });
  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      console.log(`got message ${message}`);
      ws.send(`Echo from server: ${message}`);
    });
  });
};
