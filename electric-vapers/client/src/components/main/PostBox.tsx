import styled from "styled-components";
import { Link } from "react-router-dom";
import PostItem from "./PostItem";

const StyledPostBox = styled.div`
  width: 30%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const PostBoxSubject = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Subject = styled.div`
  font-size: 24px;
  color: #4249ff;
  font-weight: bold;
`;

const MoreLink = styled(Link)`
  font-size: 13px;
  font-weight: bold;
`;

const PostItems = styled.ul`
  width: 100%;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5px;
`;

interface PostBoxProps {
  subject: string;
}

const PostBox = ({ subject }: PostBoxProps) => {
  const posts = [
    {
      subject: "제목입니다",
      author: "운영자",
      createdAt: "22-11-06",
    },
    {
      subject: "제목입니다",
      author: "운영자",
      createdAt: "22-11-06",
    },
    {
      subject: "제목입니다",
      author: "운영자",
      createdAt: "22-11-06",
    },
    {
      subject: "제목입니다",
      author: "운영자",
      createdAt: "22-11-06",
    },
  ];

  return (
    <StyledPostBox>
      <PostBoxSubject>
        <Subject>{subject}</Subject>
        <MoreLink to="">더보기</MoreLink>
      </PostBoxSubject>
      <PostItems>
        {posts.map((post, index) => (
          <PostItem
            key={index}
            author={post.author}
            subject={post.subject}
            createdAt={post.createdAt}
          />
        ))}
      </PostItems>
    </StyledPostBox>
  );
};

export default PostBox;
