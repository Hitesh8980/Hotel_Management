const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config(); 
const routes = require("./routes");
const { errorMiddleware } = require("./middlewares/errorMiddleware");
const { DB_URI } = process.env;

const app = express();

app.use(express.json());
app.use(cors());

// API Routes
app.use("/api", routes);

// Error handling middleware
app.use(errorMiddleware);

mongoose
  .connect(DB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

module.exports = app;
