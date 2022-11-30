import styled from "styled-components";
import PostItem from "./PostItem";
import PostTitle from "./PostTitle";

const StyledBoardPosts = styled.div`
  width: 80%;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

const PostLists = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const BoardPosts = () => {
  const postData = [
    {
      id: 1,
      title: "테스트 게시물",
      author: "dongwoo",
      createdAt: "2022-11-30",
    },
    {
      id: 2,
      title: "테스트 게시물",
      author: "dongwoo",
      createdAt: "2022-11-30",
    },
    {
      id: 3,
      title: "테스트 게시물",
      author: "dongwoo",
      createdAt: "2022-11-30",
    },
    {
      id: 4,
      title: "테스트 게시물",
      author: "dongwoo",
      createdAt: "2022-11-30",
    },
    {
      id: 5,
      title: "테스트 게시물",
      author: "dongwoo",
      createdAt: "2022-11-30",
    },
    {
      id: 6,
      title: "테스트 게시물",
      author: "dongwoo",
      createdAt: "2022-11-30",
    },
    {
      id: 7,
      title: "테스트 게시물",
      author: "dongwoo",
      createdAt: "2022-11-30",
    },
    {
      id: 8,
      title: "테스트 게시물",
      author: "dongwoo",
      createdAt: "2022-11-30",
    },
  ];

  return (
    <StyledBoardPosts>
      <PostTitle />
      <PostLists>
        {postData.map((data) => (
          <PostItem data={data} />
        ))}
      </PostLists>
    </StyledBoardPosts>
  );
};

export default BoardPosts;
