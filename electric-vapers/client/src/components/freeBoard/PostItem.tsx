import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledPostItem = styled(Link)`
  width: 100%;
  height: 70px;
  display: flex;
  border-bottom: 1px solid #dbdbdb;

  &:hover {
    background-color: #dbdbdb;
  }
`;

const TurnNumber = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 20%;
  }
`;

const TitleAndAuthor = styled.div`
  width: 70%;
  height: 100%;
  display: flex;

  @media screen and (max-width: 767px) {
    width: 60%;
    flex-direction: column;
  }
`;

const Title = styled.div`
  width: 72%;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 50%;
    align-items: flex-end;
  }
`;

const Author = styled.div`
  width: 28%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 50%;
    font-size: 13px;
    color: #828282;
    justify-content: flex-start;
  }
`;

const CreatedAt = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 30%;
    flex-direction: column;
    font-size: 13px;
  }
`;

interface PostItemProps {
  data: {
    author: string;
    boardId: string;
    title: string;
    content: string;
    nickname: string;
    createdAt: string;
  };
  index: number;
  postLength: number;
}

const PostItem = ({ data, index, postLength }: PostItemProps) => {
  const { boardId, title, nickname, createdAt } = data;
  const { offsetWidth } = document.body;

  return (
    <StyledPostItem to={`/free-board/${boardId}`}>
      <TurnNumber>{postLength - index}</TurnNumber>
      <TitleAndAuthor>
        <Title>{title}</Title>
        {offsetWidth < 767 ? <Author>작성자 : {nickname}</Author> : <Author>{nickname}</Author>}
      </TitleAndAuthor>
      <CreatedAt>{createdAt}</CreatedAt>
    </StyledPostItem>
  );
};

export default PostItem;
