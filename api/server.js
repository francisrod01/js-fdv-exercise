const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const database = require('./database');

// Log requests to console.
const env = process.env.NODE_ENV || 'dev';

if (env === 'dev') {
  const morgan = require.resolve('morgan');
  app.use(morgan('dev'));
}

// Configure app to use bodyParser
// This will let us get the data from a POST.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes for our API.
const router = express.Router();

// Load our routes.
require('./routes/index')(router);
require('./routes/users')(router);

// Register our routes.
app.use('/api', router);


const port = process.env.PORT || 5000;

// Running connection to database.
const dbConnectMode = (env === 'dev') ? database.modeTest : database.modeProd;
database.connect(dbConnectMode, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error('[Database] Unable to connect to database.');
    process.exit(1);
  }

  // Start the server.
  // eslint-disable-next-line no-console
  app.listen(port, () => console.log('[Express] Magic happens on port : ', port));
});
