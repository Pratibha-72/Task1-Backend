const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const dummyData = require('./dummy.json');

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/get-config', (req, res) => {
  res.json({ message: 'Welcome to the backend API!', data: dummyData });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
