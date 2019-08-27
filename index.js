// Will (listen for connections) run the API
const server = require('./api/server');


const port = process.env.PORT || 6000;

server.listen(port, () => console.log(` running on port ${port}`) )