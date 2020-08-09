const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI} = require('./config');
const log = console.log;

const app = express();

// Connect to mongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => log('Connecté à mongoDB !'))
.catch(() => log('Connexion échouée !'));


app.get('/', (req, res) => {
    res.send('Hello worl')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));