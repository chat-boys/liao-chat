module.exports = (app) =>
  app.ws('/ws', (ws) => {
    ws.on('message', (message) => {
      console.log(`got message ${message}`);
      ws.send(`Echo from server: ${message}`);
    });
  });
