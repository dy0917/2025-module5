const express = require("express");
const router = express.Router();
const { addAPost, getPosts, getPostById } = require("../controller/post");

router.get("/", (req, res) => {
  res.send(getPosts());
});

router.get("/:id", (req, res) => {
  try{
  const { id } = req.params;
  JSON.parse("asdfasdfjkladsfj");
  console.log(id);
  res.send(getPostById(id));
  }catch(e){
    console.log(e);
    res.send(403)
  }
});

router.get("/:id/comments/:commentId", (req, res) => {
  const { id, commentId } = req.params;
  console.log(req.headers);
  console.log(id, commentId);
  res.send(204);
});

router.post("/", (req, res) => {
  const { title, desc } = req.body;
  const post = addAPost(title, desc);
  if (!post) res.send(403);
  res.send(post);
});

module.exports = router;
