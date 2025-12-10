const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const movies = require("./movies");

// GET /movies
app.get("/movies", (req, res) => {
  // filtering logic here...
  res.json({ count: movies.length, results: movies });
});

// GET /movies/:id
app.get("/movies/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const movie = movies.find(m => m.id === id);
  if (!movie) return res.status(404).json({ error: "Not found" });
  res.json(movie);
});

// health check
app.get("/", (_, res) => res.send("Movie API running on Render!"));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
