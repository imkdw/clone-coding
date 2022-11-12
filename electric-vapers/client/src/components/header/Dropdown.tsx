import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDropdown = styled.div`
  position: absolute;
  top: 100%;
  width: 130%;
  height: auto;
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 5px 5px;
  border-top: 1px solid #dbdbdb;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translateY(-5%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: smoothAppear 0.4s;
`;

const DropdownItem = styled(Link)`
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  &:last-child {
    border-radius: 0 0 5px 5px;
  }

  &:hover {
    background-color: #dbdbdb;
  }
`;

const getContent = (title: string | undefined) => {
  switch (title) {
    case "입호흡(MTL)":
      return (
        <>
          <DropdownItem to="/mtl-liquid">액상리뷰</DropdownItem>
          <DropdownItem to="">기기리뷰</DropdownItem>
        </>
      );
    case "폐호흡(DTL)":
      return (
        <>
          <DropdownItem to="">액상리뷰</DropdownItem>
          <DropdownItem to="">기기리뷰</DropdownItem>
        </>
      );
    case "커뮤니티":
      return (
        <>
          <DropdownItem to="">자유게시판</DropdownItem>
          <DropdownItem to="">질문 / 답변</DropdownItem>
          <DropdownItem to="">액상리뷰 요청</DropdownItem>
          <DropdownItem to="">기기리뷰 요청</DropdownItem>
        </>
      );
    case "중고장터":
      return (
        <>
          <DropdownItem to="">액상거래</DropdownItem>
          <DropdownItem to="">기기거래</DropdownItem>
          <DropdownItem to="">주변부품 거래</DropdownItem>
        </>
      );
    case "공지사항":
    case "건의사항":
  }
};

interface DropdownProps {
  title: string | undefined;
}

const Dropdown = ({ title }: DropdownProps) => {
  return <StyledDropdown>{getContent(title)}</StyledDropdown>;
};

export default Dropdown;
