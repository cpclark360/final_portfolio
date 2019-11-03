const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

let cors = require("cors");

//npm run app

// routes
const contacts = require("./routes/api/contacts");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world!"));

app.use("/api/contacts", contacts);

// Serve static assets in build folder if we are in production
if (process.env.NODE_ENV === "production") {
  //  Set static folder
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname), "frontend", "build", "index.html");
  });
}

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
