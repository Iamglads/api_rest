const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI} = require('./config');
const log = console.log;

// routes 
const postRoute = require('./routes/api/post');

const app = express();

//bodyParser middleware 

app.use(express.json());

// Connect to mongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => log('Connecté à mongoDB !'))
.catch(() => log('Connexion échouée !'));


app.use('/api/post',postRoute);
app.use('/api/post', postRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));