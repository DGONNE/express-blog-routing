const express = require("express");
const blogsRouter = require("./routers/post.js");
const app = express();
const port = 3001;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/posts", blogsRouter);

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
