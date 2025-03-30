const { pushPost, getAllPosts } = require("../service/post");

const addAPost = (title, desc) => {
  const id = getAllPosts().length + 1;
  if (!title) return undefined;
  const post = {
    id,
    title,
    desc,
    createdAt: new Date(),
  };

  pushPost(post);
  return post;
};

const getPosts = () => {
  return getAllPosts();
};

const getPostById = (id) => {
  return getAllPosts().find((post) => post.id == id);
};

module.exports = {
  getPosts,
  addAPost,
  getPostById,
};
