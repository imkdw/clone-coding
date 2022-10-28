function makeUrl(url: string) {
  return `http://localhost:5000${url}`;
}

const config = {
  url: {
    auth: {
      loginUrl: makeUrl("/auth/login"),
      registerUrl: makeUrl("/auth/register"),
      checkLoginedUrl: makeUrl("/auth/logged-in"),
    },
    post: {
      addPost: makeUrl("/post/add-post"),
      getPost: makeUrl("/post/posts"),
    },
  },
};

export default config;
