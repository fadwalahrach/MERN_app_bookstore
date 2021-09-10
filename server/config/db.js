const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=> console.log('Connected to the DB')).catch(error => console.log(error))