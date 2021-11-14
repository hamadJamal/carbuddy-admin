const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
const postsRoute = require("./routes/posts");
const complaintsRoute = require("./routes/complaints");
const DB = process.env.DB_CONNECTION;
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/charges", postsRoute);
app.use("/complaints", complaintsRoute);

app.get("/", (req, res) => {
  res.send("Hello User");
});

app.get("/api/name", (req, res) => {
  res.send("CarBuddy");
});
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to Database was successful..");
  })
  .catch((error) => {
    console.log(error);
  });

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Listening on port ${port}..`));
