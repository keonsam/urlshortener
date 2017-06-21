const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
   originalUrl: String,
   shortenUrl: String
}, {timestamps: true});

const ModelClass = mongoose.model('urlShorter',urlSchema);

module.exports = ModelClass;
