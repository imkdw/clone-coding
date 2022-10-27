import connection from "./../db";

class PostModel {
  static savePost = async (postId: string, images: string[]) => {
    return new Promise((res, rej) => {
      const query = `INSERT INTO posts(post_id, content, author) VALUES (?, ?, ?)`;
      connection.query(query);
    });
  };
}

export default PostModel;
