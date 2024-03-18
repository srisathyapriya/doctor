const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // To load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
