'use strict';

var app = require('connect')();
var cors = require('cors')
var http = require('http');
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var fs = require('fs');
var serverPort = 8080;
var bodyParser = require('body-parser');


app.use(cors());
// swaggerRouter configuration
console.log(`env: ${process.env.NODE_ENV}`);
var options = {
  swaggerUi: '/swagger.json',
  controllers: './src/controllers',
  // process.env.NODE_ENV === 'production' ? false : true // Conditionally turn on stubs (mock mode)
  useStubs: false // true to skip your implementation and use randomly generated value based on yml file
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync('./src/api/swagger.yaml', 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });
});
