const { Server } = require('uws');

const TestModel = require('./models/test-model');

function processNewConnection(ws) {
    console.log('[wss]', 'New client connected');
    ws.send('Welcome');

    ws.on('message', (data) => {
        if (data.startsWith('::')) {
            return TestModel
                .getAll()
                .then((items) => {
                    ws.send(JSON.stringify(items));
                })
        }

        (new TestModel({ data }))
            .save()
            .then(() => {
                ws.send('Saved');
            });
    });
}

module.exports = {
    init: (server) => {
        const wss = new Server({ server, path: '/ws' });
        wss.on('connection', processNewConnection);
    }
};