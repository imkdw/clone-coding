import { Request, Response, NextFunction } from "express";
import FirebaseStorage from "../firebase/storage";
import Secure from "../utility/secure";
import PostModel from "../models/postModel";

class PostController {
  static addPost = async (req: Request, res: Response, next: NextFunction) => {
    const { content } = req.body;
    const files = req.files["file"];
    const postId = Secure.getUUID();

    /** 업로드된 이미지들을 Firebase Storage에 업로드 및 다운로드 링크 반환 */
    const imageUrls = await FirebaseStorage.uploadImageAndGetUrl(postId, files);

    const { email } = req.app.get("userInfo");
    await PostModel.savePost(postId, content, email);

    imageUrls.forEach(async (url) => {
      await PostModel.savePostImage(postId, url);
    });

    res.json({ message: "Save Post Success" });
  };

  static getPosts = async (req: Request, res: Response, next: NextFunction) => {
    const postsQuery = await PostModel.getPosts();

    if (postsQuery) {
      const posts = await Promise.all(
        postsQuery.map(async (post) => {
          const postId = post.post_id;
          const imageQuery = await PostModel.getPostImages(postId);

          const images = imageQuery.map((image) => {
            return image.file_path;
          });

          const { profile, author, like_count, content, created_at, nickname } = post;
          return {
            profile,
            author,
            likeCount: like_count,
            content,
            postId,
            images,
            createdAt: created_at,
            nickname,
          };
        })
      );
      res.json(posts);
    } else {
      res.json({ message: "No Posts" });
    }
  };
}

export default PostController;
