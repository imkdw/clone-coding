import styled from "styled-components";

const StyledStoryItem = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background-color: black;
  margin-left: 20px;
`;

const StoryItem = () => {
  return (
    <li className="_acaz" tabIndex={-1} style={{ transform: "translateX(16px)" }}>
      <div className="_aauk _aegn">
        <button
          aria-label="dlwogursla95님의 스토리, 확인하지 않음"
          className="_aam8"
          role="menuitem"
          tabIndex={0}
        >
          <div className="_aarf _aama" aria-disabled="true" role="button" tabIndex={-1}>
            <canvas
              className="_aarh"
              height="66"
              width="66"
              style={{
                position: "absolute",
                top: "-5px",
                left: "-5px",
                width: "66px",
                height: "66px",
              }}
            ></canvas>
            <span
              className="_aa8h"
              role="link"
              tabIndex={-1}
              style={{ width: "56px", height: "56px" }}
            >
              <img
                alt="user1 프로필 사진"
                className="_aa8j"
                crossOrigin="anonymous"
                draggable="false"
                src=""
              />
            </span>
          </div>
          <div className="_aacl _aacn _aacu _aacx _aad6 _aade">
            <div className="_aamb _aamc">user1</div>
          </div>
        </button>
      </div>
    </li>
  );
};

export default StoryItem;
