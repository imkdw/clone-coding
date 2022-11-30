import styled from "styled-components";

const StyledPostTitle = styled.ul`
  width: 100%;
  height: 80px;
  border-top: 2px solid #0095f6;
  border-bottom: 2px solid #0095f6;
  display: flex;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const TitleItem = styled.li<{ width: string }>`
  width: ${(props) => props.width};
  height: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

const getItemWidth = (data: string): string => {
  let width = "";
  if (data === "순번") {
    width = "10%";
  } else if (data === "제목") {
    width = "50%";
  } else {
    width = "20%";
  }

  return width;
};

const PostTitle = () => {
  const titleData = ["순번", "제목", "작성자", "작성일"];
  return (
    <StyledPostTitle>
      {titleData.map((data, index) => {
        const width = getItemWidth(data);

        return (
          <TitleItem width={width} key={index}>
            {data}
          </TitleItem>
        );
      })}
    </StyledPostTitle>
  );
};

export default PostTitle;
