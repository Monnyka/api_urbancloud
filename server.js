const express = require("express");
const app = express();
const releasenote = require("./routes/releasenote");
const connectDB = require("./db/connect");
require("dotenv").config();

const port = 3000;

//middleware
app.use(express.json());

//mongo connect

//routes
app.get("/hello", (req, res) => {
  res.send("hello");
});

app.use("/api/v1/releasenote", releasenote);

//app.get(/api/v1/releasenote) - get all the release node
//app.post(/api/v1/releasenote) - create new release note

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("Server is listening on port 3000"));
  } catch (error) {
    console.log(error);
  }
};

start();