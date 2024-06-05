const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3001;

// Use CORS middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/GraphData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Schema and Model
const itemSchema = new mongoose.Schema({
  label: String,
  value: Number,
});

const Item = mongoose.model('Item', itemSchema);
console.log(Item);


// // Define a new item
// const newItem = new Item({
//   label: 'Example Label',
//   value: 42,
// });

// // Save the new item to the database
// newItem.save()
//   .then(() => {
//     console.log('Item saved successfully!');
//   })
//   .catch((err) => {
//     console.error('Error saving item:', err);
//   });

// API Endpoints
app.post('/api/items', async (req, res) => {
  const newItem = new Item(req.body);
  try {
    console.log("tryyyy");
    await newItem.save();
    res.status(201).send(newItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/items', async (req, res) => {
  try {
    console.log("get try");
    const page = parseInt(req.query.page, 5) || 1;
    const limit = parseInt(req.query.limit, 5) || 10;
    const skip = (page - 1) * limit;
    const items = await Item.find({}).skip(skip).limit(limit);
    console.log(items);
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});