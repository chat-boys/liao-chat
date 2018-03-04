const wsUrl = process.env.WS_HOST
  ? `wss://${process.env.WS_HOST}`
  : 'ws://localhost:3000';
const ws = new WebSocket(wsUrl);

export default ws;
