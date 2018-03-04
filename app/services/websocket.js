const ws = new WebSocket(`ws://${process.env.WS_HOST || 'localhost:3000'}/ws`);

export default ws;
