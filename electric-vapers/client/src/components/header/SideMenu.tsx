import styled from "styled-components";
import { Community, Device, Liquid, Lung, Mouth, Need, Notice, Question, Talk } from "./SideMenuIcon";
import { v4 } from "uuid";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { accessTokenState, showSideMenuState } from "../../recoil/recoil";

const StyledSideMenu = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: white;
  border-top: 1px solid #dbdbdb;
  z-index: 999;
  overflow: scroll;

  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translateX(-5%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  animation: smoothAppear 0.5s;
`;

interface MenuItemProps {
  height: string;
}

const MenuItem = styled.li<MenuItemProps>`
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &:first-child {
    margin-top: 10px;
  }
`;

const Title = styled(Link)`
  width: 95%;
  height: 40px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const SubTitle = styled(Link)`
  width: 85%;
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  margin-top: 5px;
`;

const Text = styled.div`
  font-size: 16px;
  margin-left: 10px;
`;

const Links = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  border-bottom: 1px solid #dbdbdb;
`;

const LinkText = styled(Link)`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;

  &:first-child {
    border-right: 1px solid #dbdbdb;
  }
`;

const Menus = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SideMenu = () => {
  const menus = [
    {
      id: v4(),
      icon: Mouth,
      title: "입호흡(MTL)",
      linkTo: "/mtl-liquid",
      subTitle: [
        {
          id: v4(),
          icon: Liquid,
          title: "액상 리뷰",
          linkTo: "/mtl-liquid",
        },
        {
          id: v4(),
          icon: Device,
          title: "기기 리뷰",
          linkTo: "/mtl-device",
        },
      ],
    },
    {
      id: v4(),
      icon: Lung,
      title: "폐호흡(DTL)",
      linkTo: "/dtl-liquid",
      subTitle: [
        {
          id: v4(),
          icon: Liquid,
          title: "액상 리뷰",
          linkTo: "/dtl-liquid",
        },
        {
          id: v4(),
          icon: Device,
          title: "기기 리뷰",
          linkTo: "/dtl-device",
        },
      ],
    },
    {
      id: v4(),
      icon: Community,
      title: "커뮤니티",
      linkTo: "/community-free",
      subTitle: [
        {
          id: v4(),
          icon: Talk,
          title: "자유게시판",
          linkTo: "/community-free",
        },
        {
          id: v4(),
          icon: Question,
          title: "질문 / 답변",
          linkTo: "/community-qna",
        },
        {
          id: v4(),
          icon: Liquid,
          title: "액상 리뷰 요청",
          linkTo: "/community-req-liquid",
        },
        {
          id: v4(),
          icon: Device,
          title: "기기 리뷰 요청",
          linkTo: "/community-req-device",
        },
      ],
    },
    {
      id: v4(),
      icon: Notice,
      title: "공지사항",
      subTitle: [],
      linkTo: "/notice",
    },
    {
      id: v4(),
      icon: Need,
      title: "건의사항",
      subTitle: [],
      linkTo: "/need",
    },
  ];

  const [showSideMenu, setShowSideMenu] = useRecoilState(showSideMenuState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const navigator = useNavigate();

  const onLogout = () => {
    setAccessToken("");
    localStorage.removeItem("accessToken");
    navigator("/");
  };

  const clickHandler = () => {
    if (showSideMenu) {
      setShowSideMenu(false);
      document.body.style.overflowY = "scroll";
    } else {
      setShowSideMenu(true);
      document.body.style.overflowY = "hidden";
    }
  };

  return (
    <StyledSideMenu onClick={clickHandler}>
      <Header position="relative" />
      <Links>
        {accessToken ? (
          <>
            <LinkText to="/login">내 정보</LinkText>
            <LinkText to="" onClick={onLogout}>
              로그아웃
            </LinkText>
          </>
        ) : (
          <>
            <LinkText to="/login">로그인</LinkText>
            <LinkText to="/register">회원가입</LinkText>
          </>
        )}
      </Links>
      <Menus>
        {menus.map((menu) => (
          <MenuItem key={menu.id} height={(menu.subTitle.length + 1) * 45 + "px"}>
            <Title to={menu.linkTo}>
              <menu.icon />
              <Text>{menu.title}</Text>
            </Title>
            {menu.subTitle.map((_menu) => (
              <SubTitle key={_menu.id} to={_menu.linkTo}>
                <_menu.icon />
                <Text>{_menu.title}</Text>
              </SubTitle>
            ))}
          </MenuItem>
        ))}
      </Menus>
    </StyledSideMenu>
  );
};

export default SideMenu;
