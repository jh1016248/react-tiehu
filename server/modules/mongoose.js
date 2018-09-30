const mongoose = require('mongoose');
const path = 'mongodb://localhost:27017/Tiehu';
mongoose.connect(path)
module.exports = mongoose;
