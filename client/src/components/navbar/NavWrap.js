import React from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  width: 100%;
  height: 50px;
  background-color: black;
`;

const NavWrap = ({ children }) => {
  return <NavWrapper>{children}</NavWrapper>;
};

export default NavWrap;
