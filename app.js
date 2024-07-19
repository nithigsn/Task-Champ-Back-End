const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const userRouter = require('./user-routes');



mongoose.connect("mongodb+srv://nithishgsn000:A28z7omwPZYFusnL@todo.8s1uub7.mongodb.net/?retryWrites=true&w=majority&appName=ToDo");


const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.use('/user', userRouter);

module.exports = app;
