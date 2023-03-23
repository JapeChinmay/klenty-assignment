require("dotenv").config();

const { db } = require("./db/db");
const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");

/////////////////////////////////////////////
const app = express();
app.use(express.json());
app.use(cors());

/////////////////route
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

////////////////////////////////////////////////////
const PORT = process.env.PORT || 5000;
const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("listening from ", PORT);
  });
};

server();
