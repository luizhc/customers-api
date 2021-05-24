const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

require('./controllers/customerController')(app);

app.listen(process.env.PORT || 3000);