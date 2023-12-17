const mongoose = require('mongoose');


mongoose.connect(process.env.mongo_URI)

mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})
