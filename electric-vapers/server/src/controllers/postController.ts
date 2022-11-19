import { Request, Response, NextFunction } from "express";
import { getUUID } from "../module/secure";
import { getNickname, getPost, getPostImages, getPosts, insertMtlLiquidImage, insertPost } from "../models/postModel";
import { uploadImageAndGetUrl } from "../firebase/Storage";
import { snakeToCamel } from "../module/util";

/**
 * 입호흡 리뷰 목록 가져오기
 */
export const getMtlLiquidReviews = async (req: Request, res: Response, next: NextFunction) => {
  const postQuery = await getPosts("mtl");
  const posts = postQuery.map((post) => {
    const { post_id, title, introduce, volume, nico_volume } = post;
    return {
      postId: post_id,
      title,
      introduce,
      volume,
      nicoVolume: nico_volume,
      sumbnail: "",
    };
  });

  /** 포스트의 썸네일 이미지 */
  const postSumbnailQuery = await Promise.all(
    posts.map(async (post) => {
      return await getPostImages(post.postId);
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

/**
 * 폐호흡 리뷰 목록 가져오기
 */
export const getDtlLiquidReviews = async (req: Request, res: Response, next: NextFunction) => {
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
      return await getPostImages(post.postId);
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

/**
 * 리뷰 상세정보 가져오기
 */
export const getLiquidReview = async (req: Request, res: Response, next: NextFunction) => {
  const { postId } = req.params;
  const postQuery = await getPost(postId);
  console.log(postQuery);
  const post = {};

  if (postQuery) {
    const nicknameQuery = await getNickname(postQuery[0].author);
    postQuery[0].nickname = nicknameQuery[0].nickname;
    const imageQuery = await getPostImages(postId);
    const images = await Promise.all(
      imageQuery.map((image) => {
        return image.image_url;
      })
    );

    for (const item in postQuery[0]) {
      const camelItem = snakeToCamel(item);
      post[camelItem] = postQuery[0][item];
    }

    res.json({ post, images });
    return;
  }

  res.status(400).json({ message: "포스트를 찾을수 없습니다." });
};

/**
 * 액상 리뷰 작성
 */
export const postLiquidReview = async (req: Request, res: Response, next: NextFunction) => {
  const postData = JSON.parse(req.body.postData);
  postData.postId = getUUID();
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
