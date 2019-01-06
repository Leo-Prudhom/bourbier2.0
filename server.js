const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const users = require('./routes/api/users')

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser :true })
            .then(() => console.log('Mongo connected'))
            .catch(err => console.log(err.message));



app.use('/api/items', items);
app.use('/api/users', users);

const port = process.env.port || 5000;


app.listen(port, ()=>console.log(`server started on port ${port}`));