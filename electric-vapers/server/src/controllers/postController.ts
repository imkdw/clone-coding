import { Request, Response, NextFunction } from "express";
import { getUUID } from "../module/secure";
import {
  getNickname,
  getPost,
  getPostImages,
  getPosts,
  insertMtlLiquidImage,
  insertPost,
  selectLiquidReviewComment,
  writeLiquidReviewComment,
} from "../models/postModel";
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
interface IPost {
  [key: string]: string | number;
}

export const getLiquidReview = async (req: Request, res: Response, next: NextFunction) => {
  // postQuery 출력결과
  /**
   * [
  RowDataPacket {
    post_id: 'f7a2826b-68a5-4278-88fd-3ab4979a137c',
    author: 'imkdw@kakao.com',
    type: 'SM',
    title: '크림 오브더 크랍(크오크)',
    volume: 30,
    nico_volume: 9,
    introduce: '우유의 고소함과 연초의 특유의맛',
    content: '연초끊을때 좋음',
    sweet: 5,
    mensol: 1,
    neck: 4,
    fresh: 1,
    division: 'mtl',
    created_at: '2022-11-26 16:55:22'
  }
  ]
   */
  const { postId } = req.params;

  const postQuery = await getPost(postId);
  const post: IPost = {};

  if (postQuery) {
    const nicknameQuery = await getNickname(postQuery[0].author);
    postQuery[0].nickname = nicknameQuery[0].nickname;
    const imageQuery = await getPostImages(postId);
    const images = await Promise.all(
      imageQuery.map((image) => {
        return image.image_url;
      })
    );

    /** snake_case로 작성된 키값을 camelCase로 변경 */
    for (const item in postQuery[0]) {
      const camelItem = snakeToCamel(item);
      post[camelItem] = postQuery[0][item];
    }

    res.json({
      post: {
        postId: post.postId,
        author: post.author,
        nickname: post.nickname,
        type: post.type,
        title: post.title,
        info: {
          volume: post.volume,
          nicoVolume: post.nicoVolume,
        },
        introduce: post.introduce,
        content: post.content,
        score: {
          sweet: post.sweet,
          mensol: post.mensol,
          neck: post.neck,
          fresh: post.fresh,
        },
        division: post.division,
        createdAt: post.createdAt,
      },
      images,
    });
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

/**
 * 리뷰 상세정보 댓글 가져오기
 */
export const getLiquidReviewComment = async (req: Request, res: Response, next: NextFunction) => {
  const { postId } = req.params;
  const commentQuery = await selectLiquidReviewComment(postId);
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

/**
 * 리뷰 상세정보 댓글 작성하기
 */
export const postLiquidReviewComment = async (req: Request, res: Response, next: NextFunction) => {
  const { postId, comment } = req.body;
  const { author, nickname, text } = comment;
  await writeLiquidReviewComment(postId, author, nickname, text);
  res.json("");
};
