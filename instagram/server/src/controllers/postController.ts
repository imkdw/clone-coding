import { Request, Response, NextFunction } from "express";

class PostController {
  static addPost = (req: Request, res: Response, next: NextFunction) => {
    const [files, content] = [req.files, req.body.content];
    res.json("addPost");
  };
}

export default PostController;
