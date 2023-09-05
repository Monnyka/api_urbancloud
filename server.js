const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connectDB = require("./db/connect");
require("dotenv").config();

const port = process.env.PORT;
const connectString = process.env.CONNECTIONSTRING;

//middleware
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(connectString); //will change connection string with process.env.MONGO_URI
    app.listen(port, console.log("Server is listening on port " + port));
  } catch (error) {
    console.log(error);
  }
};

start();
