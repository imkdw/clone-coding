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

    /**
     * 데이터베이스에 포스트 정보를 저장
     * 1. posts 테이블에 포스트 정보 저장
     * 2. post_images 테이블에 포스트 이미지 저장
     */
    const { email } = req.app.get("userInfo");
    await PostModel.savePost(postId, content, email);

    imageUrls.forEach(async (url) => {
      await PostModel.savePostImage(postId, url);
    });

    res.json({ message: "Save Post Success" });
  };

  static getPosts = async (req: Request, res: Response, next: NextFunction) => {
    const postsQuery = await PostModel.getPosts();
    console.log(postsQuery);
  };
}

export default PostController;
