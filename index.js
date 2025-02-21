// Listen on a specific host via the HOST environment variable
let host = process.env.HOST || '138.68.90.217';
// Listen on a specific port via the PORT environment variable
let port = process.env.PORT || 8080;

let cors_proxy = require('cors-anywhere');

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function () {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
