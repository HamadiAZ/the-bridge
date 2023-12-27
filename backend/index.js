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
app.use(
  cors({
    methods: ["GET", "POST", "PUT"],
    origin: "http://localhost:3000",
    credentials: true, //IMPORTANT
    //enable cookies
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

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});


app.post("/addProduct", upload.single('image'), (req, res) => {
  const { title, price } = req.body;
  const image_data = req.file.buffer; // Get the buffer containing binary data
  console.log(image_data)
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