const expressWs = require('express-ws');

module.exports = (app) => {
  expressWs(app);
  app.ws('/ws', (ws) => {
    ws.on('message', (message) => {
      console.log(`got message ${message}`);
      ws.send(`Echo from server: ${message}`);
    });
  });
};
