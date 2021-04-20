const http = require('http');
const app = require('./app');
const fs = require("fs");

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

app.get("/index.html", (req, res) => {
  res.sendFile( __dirname + "/index.html")
})

app.get("/produit.html", (req, res) => {
  res.sendFile( __dirname + "/produit.html")
})

app.get("/panier.html", (req, res) => {
  res.sendFile( __dirname + "/panier.html")
})

app.get("/commande.html", (req, res) => {
  res.sendFile( __dirname + "/commande.html")
})

server.listen(port);

