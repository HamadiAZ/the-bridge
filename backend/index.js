const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const mysql = require("mysql");
const multer  = require('multer');

const storage = multer.memoryStorage(); // 
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 }, // Example: 10 MB limit
});

app.use(express.json())

app.use(
  cors({
    methods: ["GET", "POST", "PUT"],
    origin: "http://localhost:3000",
    credentials: true, 
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "tp",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("MySQL connected");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.post("/addProduct", upload.single('image'), (req, res) => {
  const { title, price } = req.body;
  const image_data = req.file.buffer; // Get the buffer containing binary data
  const insertQuery = 'INSERT INTO products (title, price, image_data) VALUES (?, ?, ?)';
  db.query(insertQuery, [title, price, image_data], (err, results) => {
    if (err) {
      console.error('MySQL insert error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Product data received and saved successfully', productId: results.insertId });
    }
  });
});

app.get("/products", (req, res) => {
  const selectQuery = 'SELECT * FROM products';
  db.query(selectQuery, (err, results) => {
    if (err) {
      console.error('MySQL select error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.post("/sendMessage", (req, res) => {
  console.log(req.body)
  const { name, email, message } = req.body;

  const insertQuery = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
  db.query(insertQuery, [name, email, message], (err, results) => {
    if (err) {
      console.error('MySQL insert error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Message received and saved successfully', messageId: results.insertId });
    }
  });
});

app.get("/messages", (req, res) => {
  const selectQuery = 'SELECT * FROM messages';
  db.query(selectQuery, (err, results) => {
    if (err) {
      console.error('MySQL select error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

