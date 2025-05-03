const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const emailRoute = require("./routes/email.route");

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use("/emails", emailRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
