// IMPORTS
import mongoose from "mongoose";
import express from "express";
import dbconnection_url from "./connection.js";
import countries from "./models.js";
import cors from "cors";
// VARIABLES
const port = process.env.PORT || 3000;
const app = express();
// MIDLEWAYS
app.use(express.json());
app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Header", "*");
//   next();
// });
// DATABASE LOGIC
mongoose.connect(dbconnection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// ROUTES
app.get("/", (request, response) => {
  response.status(200).send("WELCOME TO THE COUNTRIES API CALLS");
});

app.get("/v1/post", (req, res) => {
  res.status(200).send(data);
});
app.get("/v2/crisp-api/countries/api/countries.json/root", (req, res) => {
  countries.find({}, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});
// posting data to the server
app.post("/v2/post/countries/infomation", (req, res) => {
  const dbCountries = req.body;
  res.status(200).send(dbCountries);
  countries.create(dbCountries, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send(data);
    }
  });
});
// LISTNERS
app.listen(port, (error) => {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log(`THE SERVER IS RUNNING ON PORT: ${port}`);
});
