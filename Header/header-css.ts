import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface HeaderProps {
  title: string;
}

const HeaderContainer = styled.header`
  border-bottom: 1px solid #ccc;
  padding: 10px;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
`;

const HeaderNav = styled.nav`
  float: right;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderNav>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;