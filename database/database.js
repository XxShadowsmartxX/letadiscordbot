const mongoose = require('mongoose');
module.export = mongoose.connect('mongodb://localhost:27017/Moderation', {useNewUrlParser: true, useUnifiedTopology: true});

