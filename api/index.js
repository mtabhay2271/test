const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const authRoute = require('./controller/auth');
const userRoute = require('./controller/user');
require('dotenv').config()
// Initialize express app
const app = express(); 

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Routes

// Route middleware

app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

// Start server 
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
