const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const messageRouter = require("./routers/messageRouter");
// const productRouter = require("./routers/productRouter");

app.use(express.json());
const PORT = process.env.PORT || 3300;
const DB_URI = process.env.DB_URI;

//middleware
app.use(bodyParser.json());
app.use(cors());

//dummy mesage
let message = [];
/**Database connection starts */
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connection to MongoDB is established!");
  })
  .catch((err) => {
    console.log("something went wrong with DB connection", err);
  });

/**Database connection ends */


/**routers*/
// app.use("/api/messages", messageRouter);
app.use("/api/messages", messageRouter);

//fallback middleware, i.e if no middleware works then the default middleware works
app.use(function (req, res) {
  res.status(404).send("404 Not Found");
});

//start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost/${PORT}`);
});