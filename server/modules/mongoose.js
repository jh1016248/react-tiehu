const mongoose = require('mongoose');
const path = 'mongodb://localhost:27017/Tiehu';
mongoose.connect(path, { useNewUrlParser: true })
module.exports = mongoose;
