const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//------ DB cofig --------//
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
  useCreateIndex: true,
});
  
  mongoose.connection.on('connected', () => {
    console.log('Connected to the database');
  });
  mongoose.connection.on('error', (err) => {
    console.error(`Failed to connected to the database: ${err}`);
  });

//------ middlewares --------//
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


//------ Routes --------//
app.post('/hello', (req,res) => {
    const name = req.body.name;
    res.send({
        message: 'welcome ${name}'
    })
})
module.exports = app;