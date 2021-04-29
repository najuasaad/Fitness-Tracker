const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const databaseUrl = "fitness";
const collections = ["exercises"];
const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

db.on("error", error => {
  console.log("Database Error:", error);
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
  useNewUrlParser: true,
  useFindAndModify: false
});