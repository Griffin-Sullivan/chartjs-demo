const express = require("express");
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config.js');
const PORT = process.env.PORT || 3001;

const app = express();
require('./routes/budget.routes.js')(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res = fetch('https://chartjs-demo-test.herokuapp.com:3001/budget', {
        method: 'GET'
    });
});

app.post("/", (req, res) => {
    res = fetch('https://chartjs-demo-test.herokuapp.com:3001/budget', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ food: req.body.food }),
    });
});

// Database config

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});