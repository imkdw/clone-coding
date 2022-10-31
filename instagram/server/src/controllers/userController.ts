import { Request, Response, NextFunction } from "express";
import PostModel from "../models/postModel";
import UserModel from "../models/userModel";
import Jwt from "../utility/jwt";

class UserController {
  static getProfile = async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.headers.authorization;

    if (accessToken) {
      const decodedToken = Jwt.decodeToken(accessToken);
      const profileQuery = await UserModel.getUserProfile(decodedToken.email);
      const { email, name, nickname, profile, introduce } = profileQuery[0];

      const postQuery = await PostModel.getOwnPosts(email);
      const postData = await Promise.all(
        postQuery.map(async (post) => {
          const imageQuery = await PostModel.getPostImages(post.post_id);
          const images = await Promise.all(
            imageQuery.map(async (image) => {
              return image.file_path;
            })
          );
          return {
            postId: post.post_id,
            likeCount: post.like_count,
            commentsCount: post.comments_count,
            images,
          };
        })
      );

      res.json({ email, name, nickname, profile, introduce, postData });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  };

  static searchUser = async (req: Request, res: Response, next: NextFunction) => {
    /**
     * 1. nickname을 받음
     * 2. users 테이블에서 nickname, introduce 속성에 nickname이 포함되는 유저를 반환
     */
    const { nickname } = req.body;
    const usersQuery = await UserModel.searchUserWithNickname(nickname);

    if (usersQuery) {
      const users = usersQuery.map((user) => user);

      res.json(users);
    }
  };
}

export default UserController;
