const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/playlist_maker';
mongoose.connect(mongoDB, { useNewUrlParser: true });

const db = mongoose.connection;

module.exports = db;