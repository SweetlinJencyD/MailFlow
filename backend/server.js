const express = require("express");
const app = express();
const connectDB = require("./config/db/db");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
