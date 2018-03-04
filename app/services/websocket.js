const ws = new WebSocket(`ws://${process.env.HOST || 'localhost:3000'}/ws`);

export default ws;
