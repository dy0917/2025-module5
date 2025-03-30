const posts = [];

const pushPost = (post) => {
  posts.push(post);
};

const getAllPosts = () => {
  return posts;
};

module.exports = {
  pushPost,
  getAllPosts,
};
