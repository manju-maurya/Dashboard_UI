// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Use CORS middleware
app.use(cors());

// Dummy data
const data = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  label: `Label ${index + 1}`,
  value: Math.floor(Math.random() * 100),
}));

// Endpoint to get paginated data
app.get('/data', (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const start = (page - 1) * limit;
  const end = start + limit;
  res.json({ data: data.slice(start, end) });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

