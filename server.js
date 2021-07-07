const express = require("express");
const mongoose = require("mongoose");

const assets = require("./routes/api/assets");

const app = express();

app.use(express.json());

var cors = require("cors");

app.use(cors()); // Use this after the variable declaration

const db = require("./config/keys").mongoURI;

// Connect db
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api", assets);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
