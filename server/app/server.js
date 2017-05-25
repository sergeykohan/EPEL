const https = require('https');
const path = require('path');
const fs = require('fs');

const httpApp = require('./http-app');
const wsApp = require('./ws-app');

const serverOptions = {
    key: fs.readFileSync(path.resolve(__dirname, './certificates/etel-test.key')),
    cert: fs.readFileSync(path.resolve(__dirname, './certificates/etel-test.crt')),
};

const server = https.createServer(serverOptions, httpApp);
wsApp.init(server);

const listenOptions = {
    port: 5000,
};

server.listen(listenOptions, () => {
    console.log('Server is on 5000 port');
});