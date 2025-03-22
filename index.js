const express = require("express");
// const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { config } = require("dotenv");
require("dotenv").config();
const cors = require("cors");
// declaring the app
const app = express();

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors());

const api = process.env.API_URL;

// USER SCHEMA
const userSchema = mongoose.Schema({
  name: String,
  password: String,
  email: String,
});

const users = mongoose.model("users", userSchema);

// Post
app.post(`${api}/users`, (req, res) => {
  const user = new users({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  });

  user
    .save()
    .then((createdUsers) => {
      res.status(201).json(createdUsers);
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        success: false,
      });
    });
});

// Default Route (Fixes the 404 error) on Render
app.get("/", (req, res) => {
  res.send("welcome to Nator");
});

// get
app.get(`${api}/users`, async (req, res) => {
  const user = await users.find();
  if (!user) {
    res.status(500).json({ success: false });
  }
  res.send(user);
  res.status(201);
});

// connecting the database
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database connection is ready");
  })
  .catch((error) => {
    console.error(error);
  });

// console.log(process.env.CONNECTION_STRING, api);

app.listen(3000, () => {
  console.log(`The server is running on http://localhost:3000`);
});
