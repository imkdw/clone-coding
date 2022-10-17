import styled from "styled-components";

import appStore from "../../../assets/appstore.png";
import playStore from "../../../assets/playstore.png";

const StyledStoreButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledDonwloadLists = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledDownloadButton = styled.button`
  width: 136px;
  height: 40px;
`;

const StyledDownloadButtonImage = styled.img`
  width: 136px;
  height: 40px; ;
`;

const StyledBottomText = styled.div`
  color: #262626;
  font-size: 14px;
`;

const StoreButton = () => {
  return (
    <StyledStoreButton>
      <StyledBottomText>앱을 다운로드하세요.</StyledBottomText>
      <StyledDonwloadLists>
        <StyledDownloadButton>
          <StyledDownloadButtonImage src={appStore} />
        </StyledDownloadButton>
        <StyledDownloadButton>
          <StyledDownloadButtonImage src={playStore} />
        </StyledDownloadButton>
      </StyledDonwloadLists>
    </StyledStoreButton>
  );
};

export default StoreButton;
