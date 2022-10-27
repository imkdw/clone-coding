import { Request, Response, NextFunction } from "express";
import FirebaseStorage from "../firebase/storage";
import Secure from "../utility/secure";

class PostController {
  static addPost = async (req: Request, res: Response, next: NextFunction) => {
    const { content } = req.body;
    const files = req.files["file"];
    const postId = Secure.getUUID();

    const userDTO = [postId, content];

    /** 업로드된 이미지들을 Firebase Storage에 업로드 및 다운로드 링크 반환 */
    const imageUrls = await FirebaseStorage.uploadImageAndGetUrl(postId, files);

    /**
     * 데이터베이스에 포스트 정보를 저장
     * 1. posts 테이블에 포스트 정보 저장
     * 2. post_images 테이블에 포스트 이미지 저장
     */

    res.json(imageUrls);
  };
}

export default PostController;
