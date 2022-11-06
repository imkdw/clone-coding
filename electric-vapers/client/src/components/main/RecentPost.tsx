import styled from "styled-components";
import PostItem from "./PostBox";

const StyledRecentPost = styled.div`
  width: 70%;
  height: auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    margin-top: 20px;
  }
`;

const RecentPost = () => {
  const recentSubject = ["공지사항", "커뮤니티", "중고장터"];
  return (
    <StyledRecentPost>
      {recentSubject.map((subject) => (
        <PostItem subject={subject} />
      ))}
    </StyledRecentPost>
  );
};

export default RecentPost;
