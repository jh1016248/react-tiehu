const mongoose = require('./mongoose');
const CountSchema = new mongoose.Schema({
    key: {type: String},
    value: {type: Number},
}, {versionKey: false})

module.exports = mongoose.model('count', CountSchema, 'Counts');