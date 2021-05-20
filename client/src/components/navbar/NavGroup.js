import React from "react";
import styled from "styled-components";

const StyledGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavGroup = ({ children }) => {
  return <StyledGroup>{children}</StyledGroup>;
};

export default NavGroup;
