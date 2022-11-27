import { Request, Response, NextFunction } from "express";
import { getUUID } from "../module/secure";
import {
  dropLiquidReview,
  dropLiquidReviewComment,
  getNickname,
  getReview,
  getReviewImages,
  getReviews,
  insertLiquidImage,
  insertReview,
  selectImageCount,
  selectLiquidReviewComment,
  updateLiquidReview,
  writeLiquidReviewComment,
} from "../models/reviewModel";
import { removeFiles, uploadImageAndGetUrl } from "../firebase/Storage";
import { snakeToCamel } from "../module/util";

/** 입호흡 리뷰 목록 가져오기 */
export const getMtlLiquidReviews = async (req: Request, res: Response, next: NextFunction) => {
  const reviewQuery = await getReviews("mtl");
  const reviews = reviewQuery.map((review) => {
    const { review_id, title, introduce, volume, nico_volume } = review;
    return {
      reviewId: review_id,
      title,
      introduce,
      volume,
      nicoVolume: nico_volume,
      sumbnail: "",
    };
  });

  /** 포스트의 썸네일 이미지 */
  const reviewSumbnailQuery = await Promise.all(
    reviews.map(async (review) => {
      return await getReviewImages(review.reviewId);
    })
  );

  const reviewSumbnail = await Promise.all(
    reviewSumbnailQuery.map(async (sumbnail) => {
      return sumbnail[0].image_url;
    })
  );

  /** reviews에 썸네일 추가 */
  reviewSumbnail.forEach((sumbnail, index) => {
    reviews[index].sumbnail = sumbnail;
  });

  if (reviews) {
    res.json({ reviews });
    return;
  }

  res.status(500).json({ message: "Server Internal Error" });
};

/** 폐호흡 리뷰 목록 가져오기 */
export const getDtlLiquidReviews = async (req: Request, res: Response, next: NextFunction) => {
  const reviewQuery = await getReviews("dtl");
  const reviews = reviewQuery.map((review) => {
    const { review_id, title, introduce, volume, nico_volume } = review;
    return {
      reviewId: review_id,
      title,
      introduce,
      volume,
      nicoVolume: nico_volume,
      sumbnail: "",
    };
  });

  /** 포스트의 썸네일 이미지 */
  const reviewSumbnailQuery = await Promise.all(
    reviews.map(async (review) => {
      return await getReviewImages(review.reviewId);
    })
  );

  const reviewSumbnail = await Promise.all(
    reviewSumbnailQuery.map(async (sumbnail) => {
      return sumbnail[0].image_url;
    })
  );

  /** reviews에 썸네일 추가 */
  reviewSumbnail.forEach((sumbnail, index) => {
    reviews[index].sumbnail = sumbnail;
  });

  if (reviews) {
    res.json({ reviews });
    return;
  }

  res.status(500).json({ message: "Server Internal Error" });
};

/** 액상 리뷰 작성 */
export const postLiquidReview = async (req: Request, res: Response, next: NextFunction) => {
  const reviewData = JSON.parse(req.body.reviewData);
  reviewData.reviewId = getUUID();
  const reviewQuery = await insertReview(reviewData);

  if (reviewQuery) {
    const files = req.files["file"];
    let uploadFiles = [];

    for (let i = 0; i < files.length; i++) {
      uploadFiles.push(files[i]);
    }

    uploadFiles = uploadFiles.slice(0, uploadFiles.length / 2);

    const imageUrls = await uploadImageAndGetUrl(reviewData.reviewId, uploadFiles);
    imageUrls.forEach(async (url) => {
      await insertLiquidImage(reviewData.reviewId, url);
    });

    res.send("good");
    return;
  }

  res.status(400).json({ message: "error" });
};

/** 리뷰 상세정보 가져오기 */
export const getLiquidReview = async (req: Request, res: Response, next: NextFunction) => {
  interface IReview {
    [key: string]: string | number;
  }

  const { reviewId } = req.params;
  const reviewQuery = await getReview(reviewId);
  const review: IReview = {};

  if (reviewQuery) {
    const nicknameQuery = await getNickname(reviewQuery[0].author);
    reviewQuery[0].nickname = nicknameQuery[0].nickname;
    const imageQuery = await getReviewImages(reviewId);
    const images = await Promise.all(
      imageQuery.map((image) => {
        return image.image_url;
      })
    );

    /** snake_case로 작성된 키값을 camelCase로 변경 */
    for (const item in reviewQuery[0]) {
      const camelItem = snakeToCamel(item);
      review[camelItem] = reviewQuery[0][item];
    }

    res.json({
      review: {
        reviewId: review.reviewId,
        author: review.author,
        nickname: review.nickname,
        type: review.type,
        title: review.title,
        info: {
          volume: review.volume,
          nicoVolume: review.nicoVolume,
        },
        introduce: review.introduce,
        content: review.content,
        score: {
          sweet: review.sweet,
          mensol: review.mensol,
          neck: review.neck,
          fresh: review.fresh,
        },
        division: review.division,
        createdAt: review.createdAt,
      },
      images,
    });
    return;
  }

  res.status(400).json({ message: "포스트를 찾을수 없습니다." });
};

/** 액상 리뷰 수정 */
export const modifyLiquidReview = async (req: Request, res: Response, next: NextFunction) => {
  const modifyQuery = await updateLiquidReview(req.body);

  if (!modifyQuery) {
    res.status(500).json("");
  }

  res.json("");
};

/** 액상 리뷰 삭제 */
export const deleteLiquidReview = async (req: Request, res: Response, next: NextFunction) => {
  const { reviewId } = req.params;

  const imageCountQuery = await selectImageCount(reviewId);
  const imageCount = imageCountQuery[0].count;

  /** 게시글 삭제 */
  const deleteQuery = await dropLiquidReview(reviewId);
  if (!deleteQuery) {
    res.status(500).json("");
    return;
  }

  /** firebase Storage 이미지 삭제 */
  await removeFiles(reviewId, imageCount);

  res.json("");
};

/** 리뷰 상세정보 댓글 작성하기 */
export const postLiquidReviewComment = async (req: Request, res: Response, next: NextFunction) => {
  const { reviewId, comment } = req.body;
  const { author, nickname, text } = comment;
  const commentId = getUUID();
  await writeLiquidReviewComment(commentId, reviewId, author, nickname, text);
  res.json("");
};

/** 리뷰 상세정보 댓글 가져오기 */
export const getLiquidReviewComment = async (req: Request, res: Response, next: NextFunction) => {
  const { reviewId } = req.params;
  const commentQuery = await selectLiquidReviewComment(reviewId);
  const comments = [];

  /** 댓글이 없는경우 빈배열 반환 */
  if (commentQuery.length === 0) {
    res.json([]);
    return;
  }

  commentQuery.forEach((comment) => {
    const commentItem = {};
    for (const item in comment) {
      const key = snakeToCamel(item);
      commentItem[key] = comment[item];
    }
    comments.push(commentItem);
  });

  res.json({ comment: comments });
};

/** 리뷰 상세정보 댓글 삭제하기 */
export const deleteLiquidReviewComment = async (req: Request, res: Response, next: NextFunction) => {
  const { commentId } = req.params;
  await dropLiquidReviewComment(commentId);
  res.json("");
};
