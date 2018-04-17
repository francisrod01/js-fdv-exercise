const mongoose = require('mongoose');

const state = {
  db: null,
  mode: null
};

const CONN_NAME = 'FDVExpressApi';
const CONN_PORT = 27017;
const CONN_URI = `mongodb://localhost:${CONN_PORT}/${CONN_NAME}`;

const modeTest = 'mode_list';
const modeProd = 'mode_production';


const connect = (mode, done) => {
  if (state.db) return done();

  // eslint-disable-next-line global-require
  mongoose.Promise = require('bluebird');
  mongoose.connect(CONN_URI, {
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30
  });

  const dbConn = mongoose.connection;

  dbConn.on('error', err => done(err));

  const dbName = dbConn.name;

  dbConn.once('open', () => {
    // eslint-disable-next-line no-console
    console.log('[Mongoose] connected to process: ', process.pid);
    // eslint-disable-next-line no-console
    console.log('Database name: ', dbName);

    state.db = dbConn;
    state.mode = mode;
  });

  return done();
};

module.exports = {
  connect,
  modeTest,
  modeProd
};
