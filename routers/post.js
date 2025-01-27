const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(blogs); // Risponde con la lista dei blog in formato JSON
});

// Show
router.get("/:id", (req, res) => {
  const blog = blogs.find((b) => b.id === parseInt(req.params.id));
  if (blog) {
    res.json(blog); // Restituisce il blog in formato JSON
  } else {
    res.status(404).send("Blog non trovato");
  }
});

// Create
router.post("/", (req, res) => {
  const { title, content } = req.body;
  const newBlog = {
    id: blogs.length + 1, // Assegna un ID incrementale
    title,
    content,
  };
  blogs.push(newBlog);
  res.send(`Creazione del blog con id ${newBlog.id}`);
});

// Update
router.put("/:id", (req, res) => {
  const { title, content } = req.body;
  const blog = blogs.find((b) => b.id === parseInt(req.params.id));
  if (blog) {
    blog.title = title;
    blog.content = content;
    res.send(`Aggiornamento del blog ${req.params.id}`);
  } else {
    res.status(404).send("Blog non trovato");
  }
});

// Delete
router.delete("/:id", (req, res) => {
  const blogIndex = blogs.findIndex((b) => b.id === parseInt(req.params.id));
  if (blogIndex !== -1) {
    blogs.splice(blogIndex, 1);
    res.send(`Cancellazione del blog ${req.params.id}`);
  } else {
    res.status(404).send("Blog non trovato");
  }
});

module.exports = router;
