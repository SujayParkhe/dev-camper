const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const connectDB = require('./config/db')
// Route files
const bootcamps = require('./routes/bootcamps');


// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect DB
connectDB();

const app = express();



// Dev logging middlware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}


// Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;



app.listen(
    PORT,
    console.log(`Server started on Port ${process.env.NODE_ENV} ${PORT}`)
)