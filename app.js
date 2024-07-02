const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const userRouter = require('./user-routes');

const DBNAME = 'To-Do'; // Adjust your DB name here
const USERNAME = 'nithishgsn000'; // Replace with your MongoDB Atlas username
const PASSWORD = 'Ni@736411'; // Replace with your MongoDB Atlas password
const CLUSTER_URL = 'test.v9v6n1q.mongodb.net'; // Replace with your MongoDB Atlas cluster URL
const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER_URL}/${DBNAME}?retryWrites=true&w=majority`;

// mongoose.connect(URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// mongoose.connection.on('connected', () => {
//   console.log('MongoDB connected');
// });

// mongoose.connection.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });


// mongoose.set('strictQuery', true); // Suppress the deprecation warning 
// mongoose 
//   .connect(URI) 
//   .then(() => { 
//     console.log("Connected to Mongo!"); 
//   }) 
//   .catch((err) => { 
//     console.error("Error while connecting to Mongo:", err); 
//   }); 

mongoose.connect("mongodb+srv://nithishgsn000:A28z7omwPZYFusnL@todo.8s1uub7.mongodb.net/?retryWrites=true&w=majority&appName=ToDo");


const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/user', userRouter);

module.exports = app;
