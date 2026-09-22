// app.js
const express = require("express");
const app = express();

const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const PORT = 3000;

// Middleware to parse JSON in request body
app.use(express.json());

// Custom logger middleware (runs on every request)
app.use(logger);

// Routes
app.use("/students", studentRoutes);

// Home route (just to check server is alive)
app.get("/", (req, res) => {
  res.send("Student Management REST API is running");
});

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});