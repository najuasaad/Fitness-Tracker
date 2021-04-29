const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// sets up database and calls collections
const databaseUrl = "fitness";
const collections = ["Exercise", "Workout"];
const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

db.on("error", error => {
  console.log("Database Error:", error);
});

const config = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true, 
  useFindAndModify: false 
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", config);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
