import { Request, Response, NextFunction } from "express";
import { getUUID } from "../module/secure";
import { getPostImage, getPosts, insertMtlLiquidImage, insertPost } from "../models/postModel";
import { uploadImageAndGetUrl } from "../firebase/Storage";

export const getMtlLiquidReviews = async (req: Request, res: Response, next: NextFunction) => {
  /** 전체 포스트목록 조회 */
  const postQuery = await getPosts("mtl");
  const posts = postQuery.map((post) => {
    const { post_id, name, introduce, volume, nico_volume } = post;
    return {
      postId: post_id,
      name,
      introduce,
      volume,
      nicoVolume: nico_volume,
      sumbnail: "",
    };
  });

  /** 포스트의 썸네일 이미지 */
  const postSumbnailQuery = await Promise.all(
    posts.map(async (post) => {
      return await getPostImage(post.postId);
    })
  );

  const postSumbnail = await Promise.all(
    postSumbnailQuery.map(async (sumbnail) => {
      return sumbnail[0].image_url;
    })
  );

  /** posts에 썸네일 추가 */
  postSumbnail.forEach((sumbnail, index) => {
    posts[index].sumbnail = sumbnail;
  });

  if (posts) {
    res.json({ posts });
    return;
  }

  res.status(500).json({ message: "Server Internal Error" });
};

export const getDtlLiquidReviews = async (req: Request, res: Response, next: NextFunction) => {
  /** 전체 포스트목록 조회 */
  const postQuery = await getPosts("dtl");
  const posts = postQuery.map((post) => {
    const { post_id, name, introduce, volume, nico_volume } = post;
    return {
      postId: post_id,
      name,
      introduce,
      volume,
      nicoVolume: nico_volume,
      sumbnail: "",
    };
  });

  /** 포스트의 썸네일 이미지 */
  const postSumbnailQuery = await Promise.all(
    posts.map(async (post) => {
      return await getPostImage(post.postId);
    })
  );

  const postSumbnail = await Promise.all(
    postSumbnailQuery.map(async (sumbnail) => {
      return sumbnail[0].image_url;
    })
  );

  /** posts에 썸네일 추가 */
  postSumbnail.forEach((sumbnail, index) => {
    posts[index].sumbnail = sumbnail;
  });

  if (posts) {
    res.json({ posts });
    return;
  }

  res.status(500).json({ message: "Server Internal Error" });
};

export const getMtlLiquidReview = async (req: Request, res: Response, next: NextFunction) => {};

export const postMtlLiquidReview = async (req: Request, res: Response, next: NextFunction) => {
  const postData = JSON.parse(req.body.postData);
  postData.postId = getUUID();
  postData.division = "mtl";
  const postQuery = await insertPost(postData);

  if (postQuery) {
    const files = req.files["file"];
    let uploadFiles = [];

    for (let i = 0; i < files.length; i++) {
      uploadFiles.push(files[i]);
    }

    uploadFiles = uploadFiles.slice(0, uploadFiles.length / 2);
    const imageUrls = await uploadImageAndGetUrl(postData.postId, uploadFiles);
    imageUrls.forEach(async (url) => {
      await insertMtlLiquidImage(postData.postId, url);
    });

    res.send("good");
    return;
  }

  res.status(400).json({ message: "error" });
};
