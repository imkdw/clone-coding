import connection from "./../db";

class PostModel {
  /**
   * 게시글을 저장하는 모델
   * @param postId 게시글 아이디
   * @param content 게시글 내용
   * @param author 게시글 작성자
   */
  static savePost = async (postId: string, content: string, author: string) => {
    return new Promise((res, rej) => {
      const query = `INSERT INTO posts(post_id, content, author) VALUES (?, ?, ?)`;
      connection.query(query, [postId, content, author], (err, result) => {
        if (err) {
          rej(err);
        }

        res(result);
      });
    });
  };

  /**
   * 게시물에 업로드된 사진을 저장
   * @params postId {string} 게시물 아이디(uuid)
   * @params url {string} 이미지 url
   */
  static savePostImage = async (postId: string, url: string) => {
    return new Promise((res, rej) => {
      const query = `INSERT INTO post_images(file_path, post_id) VALUES (?, ?)`;
      connection.query(query, [url, postId], (err, result) => {
        if (err) {
          rej(err);
        }

        res(result);
      });
    });
  };

  static getPosts = async () => {
    return new Promise((res, rej) => {
      const query = `SELECT * FROM posts`;
      connection.query(query, (err, result) => {
        if (err) {
          rej(err);
        }

        res(result);
      });
    });
  };
}

export default PostModel;
