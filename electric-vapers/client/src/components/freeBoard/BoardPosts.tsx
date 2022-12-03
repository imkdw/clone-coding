import styled from "styled-components";
import PostItem from "./PostItem";
import PostTitle from "./PostTitle";
import { useState, useEffect } from "react";
import axios from "axios";
import { urlConfig } from "../../config";

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
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(urlConfig.board.readFreeBoard);
      if (res.status !== 200) {
        alert("오류가 발생했습니다.");
        return;
      }

      setBoardData(res.data);
    };

    getPosts();
  }, []);

  return (
    <StyledBoardPosts>
      <PostTitle />
      <PostLists>
        {boardData.map((data, index) => (
          <PostItem data={data} index={index} postLength={boardData.length} />
        ))}
      </PostLists>
    </StyledBoardPosts>
  );
};

export default BoardPosts;
