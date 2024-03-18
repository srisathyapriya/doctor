const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // To load environment variables from .env file

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
