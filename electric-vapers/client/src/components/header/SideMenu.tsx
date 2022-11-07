import styled from "styled-components";
import {
  Community,
  Device,
  Liquid,
  Lung,
  Mouth,
  Need,
  Notice,
  Question,
  Talk,
} from "./SideMenuIcon";

const StyledSideMenu = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  top: 70px;
  background-color: white;
  border-top: 1px solid #dbdbdb;
  z-index: 999;

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

const Title = styled.div`
  width: 95%;
  height: 40px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const SubTitle = styled.div`
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

const LinkText = styled.div`
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
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 20px;
`;

const SideMenu = () => {
  const menus = [
    {
      id: 1,
      icon: Mouth,
      title: "입호흡(MTL)",
      subTitle: [
        {
          id: "1-1",
          icon: Liquid,
          title: "액상 리뷰",
        },
        {
          id: "1-2",
          icon: Device,
          title: "기기 리뷰",
        },
      ],
    },
    {
      id: 2,
      icon: Lung,
      title: "폐호흡(DTL)",
      subTitle: [
        {
          id: "2-1",
          icon: Liquid,
          title: "액상 리뷰",
        },
        {
          id: "2-2",
          icon: Device,
          title: "기기 리뷰",
        },
      ],
    },
    {
      id: 3,
      icon: Community,
      title: "커뮤니티",
      subTitle: [
        {
          id: "3-1",
          icon: Talk,
          title: "자유게시판",
        },
        {
          id: "3-2",
          icon: Question,
          title: "질문 / 답변",
        },
        {
          id: "3-3",
          icon: Liquid,
          title: "액상 리뷰 요청",
        },
        {
          id: "3-2",
          icon: Device,
          title: "기기 리뷰 요청",
        },
      ],
    },
    {
      id: 4,
      icon: Notice,
      title: "공지사항",
      subTitle: [],
    },
    {
      id: 5,
      icon: Need,
      title: "건의사항",
      subTitle: [],
    },
  ];

  return (
    <>
      <StyledSideMenu>
        <Links>
          <LinkText>로그인</LinkText>
          <LinkText>회원가입</LinkText>
        </Links>
        <Menus>
          {menus.map((menu) => (
            <MenuItem key={menu.id} height={(menu.subTitle.length + 1) * 45 + "px"}>
              <Title>
                <menu.icon />
                <Text>{menu.title}</Text>
              </Title>
              {menu.subTitle.map((_menu) => (
                <SubTitle key={_menu.id}>
                  <_menu.icon />
                  <Text>{_menu.title}</Text>
                </SubTitle>
              ))}
            </MenuItem>
          ))}
        </Menus>
      </StyledSideMenu>
    </>
  );
};

export default SideMenu;
