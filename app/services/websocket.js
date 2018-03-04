const wsUrl = process.env.WS_HOST
  ? `wss://${process.env.WS_HOST}/ws`
  : 'ws://localhost:3000/ws';
const ws = new WebSocket(wsUrl);

export default ws;
