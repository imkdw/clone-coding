import { Request, Response, NextFunction } from "express";

class PostController {
  static addPost = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.file, req.files);
    res.json("addPost");
  };
}

export default PostController;
