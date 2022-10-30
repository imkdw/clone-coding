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
            images,
          };
        })
      );

      res.json({ email, name, nickname, profile, introduce, postData });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  };
}

export default UserController;
