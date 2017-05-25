const { Server } = require('uws');

function processNewConnection(ws) {
    console.log('[wss]', 'New client connected');
    ws.send('Welcome');
}

module.exports = {
    init: (server) => {
        const wss = new Server({ server, path: '/ws' });
        wss.on('connection', processNewConnection);
    }
};